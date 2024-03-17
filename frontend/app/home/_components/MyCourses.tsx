import React from 'react'
import CourseCard from '@/app/_components/CourseCard'
import Link from 'next/link'
type mycourses = {
    mycourses: [CourseType]
}
export default function MyCourses(mycourses:mycourses) {
    const courses:CourseType[] =mycourses.mycourses
    console.log(courses)
    return (
        <section className='container mx-auto my-14'>
            <h1 className='font-semibold text-[43px]'>My <span className='text-green+'>courses</span></h1>
            <div className='flex justify-between mx-4'>
                <h3 className='font-semibold text-[28px]'>Online</h3>
                <Link href={'/'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
            </div>
            <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {courses?.map((course:CourseType) => {
                    return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                })}
            </div>
        </section>
    )
}
