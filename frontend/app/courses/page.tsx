import React from 'react'
import CourseCard from '../_components/CourseCard';
export default async function page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    const courses = await response?.json();
    const content =(
      <div>
        {
        courses && courses?.length > 0 ? courses?.map((course:CourseType) => {
          return (
            <CourseCard key={course._id} course={course} />
          )
        }) : <div>{'no course available'}</div>
      }
      </div>
    )
  return (
    <>
    {content}
    </>
  )
}
