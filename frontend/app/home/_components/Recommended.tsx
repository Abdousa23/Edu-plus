import React from 'react'
import Link from 'next/link'
import CourseCard from '@/app/_components/CourseCard'
import { useState , useEffect} from 'react'
type mycourses = {
    mycourses: [CourseType]
}
export default function Recommended(mycourses:mycourses) {
    const courses: [CourseType] = mycourses.mycourses;
    const [recommendedCourses, setRecommendedCourses] = useState<CourseType[]>([]);
    
    
    useEffect(() => {
        const highRatedCourses = courses?.sort((a, b) => b.rating - a.rating).filter((course: CourseType, index: number) => index < 3 && course.rating >= 4.5);
        setRecommendedCourses(highRatedCourses);
    }, [courses]);

  return (
    <section className='container mx-auto my-40'>
        <h1 className='font-semibold text-[43px]'>Best <span className='text-green+'>Recommended course</span></h1>
        <div className='flex justify-between mx-4'>
                    <h3 className='font-semibold text-[28px]'>Online</h3>
                    <Link href={'/'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
        </div>
        <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {recommendedCourses?.map((course:CourseType) => {
                    return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                })}
        </div>
    </section>
  
  )
}
