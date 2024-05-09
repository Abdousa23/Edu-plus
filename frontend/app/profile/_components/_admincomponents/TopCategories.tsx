import React from 'react'
import { UseGetTopCategories } from '@/app/profile/_components/_adminHoc/useGetTopCategories'



export default function TopCategories() {


  const topCourses = UseGetTopCategories()

  const data = topCourses.topCategories
  console.log("data isssss",data)






  return (
    <div className=' w-full bg-white   sm:w-1/2 '>
      <h1 className='text-2xl   text-center font-800 '>Top Categories</h1>
      <div className='flex flex-col   justify-between'>
        {
        data &&  data.map((cat: any , key:any) => {
          return (
            <div className='flex justify-between m-5' key={key}>
              <p className='text-xl'>{key}</p>
              <p className='text-xl'>{cat.name}</p>
              <p className=' text-[#333333] text-4xl font-800 '>{cat.courseCount}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
