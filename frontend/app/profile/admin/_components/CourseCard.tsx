import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import { Star } from '@mui/icons-material';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
type CourseCard = {
    course : CourseType,
    removeData: (id: string) => void
    onSelect: (item: CourseType, isSelected: boolean) => void

}
export default function CourseCard({course,removeData,onSelect}:CourseCard) {
  const fetchPrivate = useFetchPrivate()
  const handleDelete = async ()=>{
      const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/deleteCourse/${course._id}`,{
        method: 'DELETE'
      })
      const data = await response?.json()
      console.log(data)
      removeData(course?._id)
  }
  return (

    <label htmlFor={`check${course._id}`}>
    <div className='flex w-full mx-auto items-center justify-between bg-white border-b-2 border-gray-300 py-2'>
      <div className='flex gap-12  my-2 ml-2'>
      <input id={`check${course._id}`} type="checkbox"  onChange={(e) => onSelect(course, e.target.checked)} />
        <div className=' w-32 max-md:w-16'>
          <Link href={`/courses/${course._id}`}>
            <img src={course.imageUrl || "/images/defaultCourse.svg"} className='max-w-full' alt="" />
          </Link>
        </div>
        <div className='max-md:hidden'>
            <p className='font-normal text-xs'>
                <Star className='text-neworg' />
                {course.rating}
                <span className='font-normal text-xs text-[#a1a5b3]'>{`  (`+(course?.reviews?.length || 0)+`)`}</span>
            </p>
            <h1 className=' font-medium text-sm'>{course.title}</h1>
            <p className=' font-normal text-xs text-[#a1a5b3]'>Course by : <span>{course?.owner?.username || 'unknown'}</span></p>
        </div>
      </div>
        
        <div className='text-neworg text-base font-medium'>
          {course.price}
        </div>
      <div className='mr-2'>
        <button onClick={handleDelete}><DeleteIcon /></button>
      </div>
      </div>
      </label>
  )
}
