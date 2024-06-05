import React from 'react'
import { UseGetTopCategories } from '@/app/profile/_components/_adminHoc/useGetTopCategories'



export default function TopCategories() {


  const topCourses = UseGetTopCategories()

  const data = topCourses.topCategories
  console.log("data isssss",data)





  return (
    <div className=' w-full sm:w-1/2 bg-white rounded-3xl shadow-[-1px_2px_4px_rgba(0,0,0,0.11)] '>
      <h1 className='text-2xl   text-center font-bold text-[#05004E] my-4 '>Top Categories</h1>
      <div className='flex flex-col   justify-between'>
        {
        data &&  data.map((cat: any , key:any) => {
          return (
            <div className='flex justify-between m-5' key={key}>
              <p className='text-xl'>{cat.name}</p>
              <p className=' text-2xl font-800 text-green+ '>{cat.courseCount}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
