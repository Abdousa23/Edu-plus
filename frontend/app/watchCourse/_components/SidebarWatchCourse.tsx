
import React, { useEffect } from 'react'
import LessonsCard from './LessonsCard'

type course = {
  course?: CourseType,
  setSelectedLesson:()=>{},
  selectedLesson:any,
}
export default function SidebarWatchCourse({course,setSelectedLesson,selectedLesson}:course) {
  const lessons = course?.lessons ?   course?.lessons : course as any
  useEffect(()=>{
    console.log('this is the course')
    console.log(course)
  },[])
  return (
    <div className='justify-around sticky  flex flex-col items-center sm:w-full md:w-full lg:w-full  top-0 left-0 bg-white shadow-md rounded-[10px] px-4 '>
      <div className="flex w-full justify-between my-4 "> 
        <h1 className='font-bold'>Course Contents</h1>
        {/* <h1 className='text-[#23BD33] text-[14px]'>15% Completed</h1> */}
      </div>
      {
        lessons?.length > 0 && lessons?.map((lesson : any)=>{
          return <LessonsCard key={lesson._id.toString()} setSelectedLesson={setSelectedLesson} selectedLesson={selectedLesson} lesson={lesson} />
        })
      }
    </div>
  )
}
