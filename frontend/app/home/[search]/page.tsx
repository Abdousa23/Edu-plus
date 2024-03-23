'use client'
import React, { useEffect } from 'react'
import { Metadata } from 'next';
import { useState } from 'react';
import Navbar from '@/app/_components/Navbar';
import CourseCard from '@/app/_components/CourseCard';
import Footer from '@/app/_components/Footer';

type Params = {
    params: {
        search: string
    }
}


export default function page({params:{search}}:Params) {
    const [courses,setCourses] = useState<CourseType[]>([]);
    const getCourses = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/search/${search}`)
        const data = await response?.json();
        if(response?.status === 404){
            setCourses([]);
        }else{
        setCourses(data);
        }
    }
    useEffect(()=>{
        getCourses();
    },[search])


     return (
        <>
        <div className='min-h-[90vh]'>
        <Navbar />
        <div className='container mx-auto mt-8'>
            <h1 className='font-semibold text-[40px]'>{courses.length} results for "<span className='text-green+'>{search}</span>"</h1>
            <div>filters</div>

            {courses.map((course:any) => {
                return (
                    <CourseCard key={course._id} course={course} />
                )
            })}
        </div>
        {/* {typeof window !== 'undefined' && <Footer />} */}
        </div>
        
        <Footer />
        </>
  )
}
