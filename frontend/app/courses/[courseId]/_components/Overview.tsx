import React from 'react'
type course = {
    course?: CourseType
  }
export default function Overview({course}:course) {
  return (
    <div className='w-[90%] my-8 flex flex-col gap-20'>
    <div>
      <h1 className='text-[24px] font-medium'>Description</h1>
      <p className=' text-lg font-normal'>{course?.description}</p>
    </div>
    <div>
        <h1 className='text-[24px] font-medium'>who is this course for</h1>
        <p className=' text-lg font-normal'>this course i suitable to {course?.level} users,it is presented in the {course?.language} language and it contain {course?.lessons.length} lesson</p>
    </div>
    </div>
  )
}
