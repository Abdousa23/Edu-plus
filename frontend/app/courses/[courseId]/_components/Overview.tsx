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
        <h1 className='text-[24px] font-medium border-b-2 border-green+ w-fit'>Who is this course for : </h1>
        <p className=' text-lg font-normal'>This course is suitable for {course?.level} users , it is presented in the {course?.language} Language and it contains {course?.lessons?.length} Lessons.</p>
    </div>
    </div>
  )
}
