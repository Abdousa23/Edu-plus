import React from 'react'
import CourseCard from '../_components/CourseCard';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
export default async function page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    const courses = await response?.json();
    const content =(
      <div className='flex flex-wrap gap-3 container mx-auto justify-center'>
      
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
    <Navbar />
    {content}
    <Footer />
    </>
  )
}
