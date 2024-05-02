import React from 'react'
import { useState} from 'react'
import CourseCard from '../_components/CourseCard';
export default async function page() {
  const [error,setError] = useState<string>('');
  const [courses,setCourses] = useState<CourseType[] | null>(null);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    const data = await response?.json();
    setCourses(data);
  } catch (error) {
      setError('no courses available ')
  }
  return (
    <div>
      {
        courses && courses?.length > 0 ? courses?.map((course:CourseType) => {
          return (
            <CourseCard key={course._id} course={course} />
          )
        }) : <div>{error || 'no course available'}</div>
      }
    </div>
  )
}
