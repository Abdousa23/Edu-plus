
import React from 'react'
import LessonsCard from './LessonsCard'


export default function SidebarWatchCourse() {
  return (
    <div>
      <div className="flex w-[85%] mx-auto justify-between "> 
        <h1 className='font-bold'>Course Contents</h1>
        <h1 className='text-[#23BD33]'>15% Completed</h1>
      </div>
      <LessonsCard/>
    </div>
  )
}
