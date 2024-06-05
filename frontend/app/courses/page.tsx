"use client"
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
export default function page() {
  const [type, setType] = useState("all")
  const [courses, setCourses] = useState<CourseType[]>([])

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value)
    console.log(type)
  }

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
        let courses = await response?.json();
        courses = courses.sort((a: CourseType, b: CourseType) => a.title.localeCompare(b.title));
        setCourses(courses)
      } catch (error) {
        console.log('error')
      }
    }
    getCourses()
  }, [])

  const filteredCourses = courses.filter(course => type === 'all' || course.type === type);

  const content = (
    <div className='flex flex-col'>
      <div className=' ml-[18%] my-4 w-[90px] '>
        <select value={type} onChange={(e) => handleTypeChange(e)} className="w-fit h-10 border border-gray-300 rounded-md outline-none" name="category" id="category">
          <option value="all">All</option>
          <option value="online">Online</option>
          <option value="inperson">In person</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-3 container mx-auto justify-center'>

        {
          filteredCourses.length > 0 ? filteredCourses.map((course: CourseType) => {
            return (
              <CourseCard key={course._id} course={course} />
            );
          }) : <div>{'no course available'}</div>
        }
      </div>
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