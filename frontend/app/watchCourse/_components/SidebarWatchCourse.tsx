
import React from 'react'
import LessonsCard from './LessonsCard'


export default function SidebarWatchCourse() {
  return (
    <div className='justify-around sticky  flex flex-col items-center sm:w-full md:w-1/2 lg:w-1/3  top-0 left-0 bg-white shadow-md rounded-[10px] '>
      <div className="flex w-[85%] mx-auto justify-between "> 
        <h1 className='font-bold'>Course Contents</h1>
        <h1 className='text-[#23BD33] text-[14px]'>15% Completed</h1>
      </div>
      <LessonsCard/>
    </div>
  )
}
