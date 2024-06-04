'use client'
import React, { Key, useEffect, useState } from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import { openDB } from 'idb';
import LessonsCard from '../watchCourse/_components/LessonsCard';
import SidebarWatchCourse from '../watchCourse/_components/SidebarWatchCourse';

export default function page() {
  const [lessons, setLessons] = useState<LessonType[]>([])
  const [selectedLesson, setSelectedLesson] = useState<LessonType | null>(null)
  const fetchCourses = async () => {
    const db = await openDB('VideosDb', 1);
    const downloadedCourses = await db.getAll('downloadedCourses');
  
    // Create a new Blob URL for each course
    const coursesWithUrls = downloadedCourses.map(course => ({
      ...course,
      videoUrl: URL.createObjectURL(course.videoBlob),
    }));
    setLessons(coursesWithUrls);
  }
  useEffect(() => {
    fetchCourses()
   }, [])
  return (
    <div>
      <Navbar />
      <div className=' bg-[#fffaf5] py-8 container mx-auto my-2 max-md:text-center '>
        <h1 className='text-[40px] max-md:text-[35px] my-4  font-extrabold'>Course <span className='text-green+'>"details"</span></h1>
        <h2 className='text-[35px] max-md:text-[30px] my-4 font-extrabold'>{selectedLesson?.title}</h2>
        <p className='text-[20px] text-[#4d4d4d] font-normal' >{selectedLesson?.description}</p>
      </div>
      <div className="relative min-h-96 w-full container flex max-md:flex-col-reverse mt-8 mb-10">
        <div className='flex-grow'>
          <div className='w-[90%]  mx-auto border rounded-xl  h-fit'>
            {
              <video className='w-full' src={selectedLesson?.videoUrl as string} controls></video>
            }
          </div>
        </div>
        <div className="max-md:relative sticky my-8 top-0 w-[35%] max-md:w-full">
          <SidebarWatchCourse course={lessons as any} setSelectedLesson={setSelectedLesson as any} selectedLesson={selectedLesson} />
        </div>
      </div>
      <Footer />
    </div>
  )
}