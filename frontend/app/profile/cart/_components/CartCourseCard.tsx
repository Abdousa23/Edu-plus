import { Star } from '@mui/icons-material'// parfait
import Link from 'next/link'
import React, { useContext } from 'react'
import  {CartContext}  from '@/context/cartContext'
export default function CartCourseCard(course:CourseType) {
  const { purchaseCourse, removeCourseFromCart } = useContext<CartContextType>(CartContext);
  return (
    <div className='bg-white border-t-2 border-[#E9EAF0] flex justify-between items-center w-[95%] mx-auto'>
      <div className='flex gap-12  my-6'>
        <div className=' w-32 max-md:w-16'>
          <Link href={`/courses/${course._id}`}>
            <img src={course.imageUrl || "/images/defaultCourse.svg"} className='max-w-full' alt="" />
          </Link>
        </div>
        <div className='max-md:hidden'>
            <p className='font-normal text-xs'>
                <Star className='text-neworg' />
                {course.rating}
                <span className='font-normal text-xs text-[#a1a5b3]'></span>
            </p>
            <h1 className=' font-medium text-sm'>{course.title}</h1>
            <p className=' font-normal text-xs text-[#a1a5b3]'>Course by : <span>{course?.owner?.username || 'unknown'}</span></p>
        </div>
      </div>
      <div>
        <p className='text-base font-medium text-neworg'>${course.price}</p>
      </div>
      <div className='flex flex-col gap-2 mx-5'>
        <button onClick={()=>{purchaseCourse(course)}} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-green+ border-2 border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Buy now</button>
        <button onClick={()=>{removeCourseFromCart(course)}} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-[#FF0000] border-2 border-[#FF0000] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>delete</button>
    </div>
    </div>
  )
}
