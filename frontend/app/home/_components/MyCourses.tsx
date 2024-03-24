import React from 'react'
import CourseCard from '@/app/_components/CourseCard'
import { useState,useEffect } from 'react'
import Link from 'next/link'
type mycourses = {
    mycourses: [CourseType]
}
export default function MyCourses(mycourses:mycourses) {
    const courses:[CourseType] =mycourses.mycourses
    const [myOnlineCourses,setMyOnlineCourses]= useState<CourseType[]>([]);
    const [myOflineCourses, setMyOflineCourses] = useState<CourseType[]>([]);
    const handleCourses = (courses:[CourseType])=>{
        let OnlineCourses = courses?.filter((course: CourseType) => course.type === 'online');
        let OflineCourses = courses?.filter((course: CourseType) => course.type === 'inperson');
        OnlineCourses = OnlineCourses?.sort((a, b) => b.rating - a.rating).filter((course: CourseType, index: number) => index < 3 && course.rating >= 4.5);
        OflineCourses = OflineCourses?.sort((a, b) => b.rating - a.rating).filter((course: CourseType, index: number) => index < 3 && course.rating >= 4.5);
        setMyOnlineCourses(OnlineCourses);
        setMyOflineCourses(OflineCourses);
    }
    useEffect(() => {

        handleCourses(courses);
    }, [courses]);

    return (
        <section className='container mx-auto my-14'>
            <h1 className='font-semibold text-[43px]'>My <span className='text-green+'>courses</span></h1>
            <div className='flex justify-between mx-4'>
                <h3 className='font-semibold text-[28px]'>Online</h3>
                <Link href={'/profile/courses'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
            </div>
            <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {
                    myOnlineCourses?.length > 0 ?
                    myOnlineCourses.map((course:CourseType) => {
                    return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                })
                : <p>No courses available</p>
                }
            </div>
            <div className='flex justify-between mx-4'>
                    <h3 className='font-semibold text-[28px]'>In-person</h3>
                    <Link href={'/'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
        </div>
        <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {
                    myOflineCourses?.length > 0 ?
                    myOflineCourses.map((course:CourseType) => {
                    return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                })
                : <p>No courses available</p>
                }
        </div>
        </section>
    )
}
