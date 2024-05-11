import React, { useEffect } from 'react'
import UserCard from './UserCard'
import CourseCard from './CourseCard'
import { useState } from 'react'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
type contentType = {
  type: string
}
export default function UserContent({ type }: contentType) {
  const [data, setData] = useState<CourseType[] | userType[]>([])
  const [originalData, setOriginalData] = useState<CourseType[] | userType[]>([]);
  const [selected, setSelected] = useState<(CourseType | userType)[]>([])
  const fetchPrivate = useFetchPrivate()
  const getAllData = async (role: string) => {
    if (role === 'course') {
      console.log('course')
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/all`)
      const data = await response.json()
      setOriginalData(data);
      setData(data);
      console.log(data)
    } else if (role !== 'course') {
      console.log('teacher')
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalroles/${role}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setOriginalData(data);
      setData(data);

    }
  }
  const deleteSelected = async (selected:(CourseType | userType)[]) => {
    
      const ids = selected.map(item => item._id)
       const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/multipleDelete`,{
         method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          },
          body : JSON.stringify({ids}),
        },
      )
       const Data = await response?.json()
      setData(data.filter(data => !ids.includes(data._id)) as CourseType[] | userType[])
  }
  const addSelectedMod = async (selected :(CourseType | userType)[]) => {
    const ids = selected.map(item => item._id)
    console.log(ids)
    const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/addMod`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({ids}),
    },
  )
   const Data = await response?.json()
   console.log(Data)
   setData(data.filter(data => !ids.includes(data._id)) as CourseType[] | userType[])
  }
  const removeSelectedMod = async (selected :(CourseType | userType)[]) => {
    const ids = selected.map(item => item._id)
    console.log(ids)
    const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/removeMod`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({ids}),
    },
  )
   const Data = await response?.json()
   console.log(Data)
   setData(data.filter(data => !ids.includes(data._id)) as CourseType[] | userType[])
  }
  const handleSelect = (item: CourseType | userType, isSelected: boolean) => {
    if (isSelected) {
      const data = selected.concat([item]);
      setSelected(data);
    } else {
      setSelected(selected.filter(i => i._id !== item._id));
    }
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    // const oldData = data
    if(search === ''){
      setData(originalData);
    }else{
      const newData = data.filter(data => {
        if (type === 'course') {
          return (data as CourseType).title.toLowerCase().includes(search.toLowerCase())
        } else {
          return (data as userType).username.toLowerCase().includes(search.toLowerCase()) || (data as userType).email.toLowerCase().includes(search.toLowerCase())
        }
      }) as CourseType[] | userType[];
      setData(newData);
    }
    }
  const removeData = (id: string) => {
    const newData = data.filter(data => data._id !== id) as CourseType[] | userType[];
    setData(newData);
  };
  useEffect(() => {
    console.log(type)
    getAllData(type)
  }, [])
  return (<div className='w-[90%]'>
    <h1 className=' bold text-2xl ml-8 my-8 '>{type+'s'}</h1>
    <div className='flex max-md:flex-col max-md:gap-3 max-md:items-center justify-between w-[90%] mx-auto my-5'>
      <div className='flex items-center gap-2'>
        <p className='font-semibold text-sm text-org'> {selected.length} selected</p>
        <button onClick={()=>{deleteSelected(selected)}} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-fit max-sm:w-16 max-sm:h-10 max-sm:text-sm h-11 bg-green+ border-2 border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>delete selected</button>
        {
          type !== 'course' &&
          type !== 'mod' ? <button onClick={()=>{addSelectedMod(selected)}} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-fit max-sm:w-16 max-sm:h-10 max-sm:text-sm h-11 bg-org border-2 border-org rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>add mod</button>
          : type == 'mod'? <button onClick={()=>{removeSelectedMod(selected)}} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-fit max-sm:w-16 max-sm:h-10 max-sm:text-sm h-11 bg-[#FF0000] border-2 border-[#FF0000] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>remove Mod</button>
          : null
        }
      </div>
      <div>
        <input type="text" onChange={handleSearch} placeholder='Search' />
      </div>
    </div>
    <div>

    </div>
    <div>
      <div className='w-[90%] mx-auto bg-[#F9FAFB] rounded-lg '>
        <div className={`flex h-12 w-full gap-4 mx-2 justify-between  items-center 'border-b-2 border-[#E9EAF0] ' `}>
          <div className='mx-2 flex items-center'>
            <input type="checkbox" name="" id="" />
          <h1 className='text-[#8A92A6] max-w-48 text-xs font-normal mx-8'>{type}</h1>
          </div>
          <h1 className=' text-[#8A92A6] text-xs font-normal mx-4 max-md:hidden'>{type === 'course' ? "price" : "courses"}</h1>
          <div className=''></div>
        </div>
        {
          type === 'course' ?
            (
              <div>
                {
                  data.length > 0 && data.map((course) => {
                    return <CourseCard key={course._id} course={course as CourseType} removeData={removeData} onSelect={handleSelect} />

                  }
                  )}
              </div>

            )
            : (
              <div>
                {
                  data.length > 0 && data.map((user) => {
                    return <UserCard key={user._id} user={user as userType} removeData={removeData} onSelect={handleSelect} />

                  }
                  )
                }
              </div>
            )
        }


      </div>

    </div>

  </div>
  )
}
