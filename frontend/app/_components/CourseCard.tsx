import React from 'react'
import Link from 'next/link'

type course = {
  course?: CourseType
}
export default function CourseCard(course: course) {
  const Course = course?.course
  const imageUrl = Course?.imageUrl ? Course?.imageUrl : "/images/landing.svg"
  return (
    <div className='w-[280px] h-[420px] m-3 shadow-md rounded-lg order-0 max-md:w-[200px] '>


  <img src={imageUrl} className='w-[90%] h-[40%] rounded-md mx-auto my-1 ' alt="" />
    
        
    

    <div className='p-4 w-full h-3/5 flex flex-col items-stretch justify-evenly '>
        <p className='font-regular text-sm text-[#777795]'>{Course?.date}</p>
        <h1 className='font-extrabold text-2xl'>{Course?.title}</h1>
        <p className='font-regular text-base text-[#4d4d4d] overflow-hidden my-2'>Course description:{Course?.description}</p>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className=''>Price : {Course?.price && Course?.price > 0 ? Course?.price+' DZD' : 'free'}</p>
            <p className=''>Type : {Course?.type === 'online' || Course?.type==='Online' ? 'Online' : 'In Person'}</p>
            </div>
            <div>
            <Link href={`/courses/${Course?._id}`}  className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 border border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>show details</Link>
            </div>
        </div>
    </div>
</div>
  )
}
