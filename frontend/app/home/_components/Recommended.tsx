import React from 'react'
import Link from 'next/link'
import CourseCard from '@/app/_components/CourseCard'
import { useState , useEffect} from 'react'
type mycourses = {
    mycourses: [CourseType]
}
export default function Recommended(mycourses:mycourses) {
    const courses: [CourseType] = mycourses.mycourses;
    const [recommendedOnlineCourses, setRecommendedOnlineCourses] = useState<CourseType[]>([]);
    const [recommendedOflineCourses, setRecommendedOflineCourses] = useState<CourseType[]>([]);
    
    const handleCourses = (courses:[CourseType])=>{
        let OnlineCourses = 
            courses?.length > 0 ?   
            courses.filter((course: CourseType) => course.type === 'online') : [];
        let OflineCourses = 
            courses?.length > 0 ?
            courses?.filter((course: CourseType) => course.type === 'inperson') : [];
        OnlineCourses = OnlineCourses?.sort((a, b) => b.rating - a.rating).filter((course: CourseType, index: number) => index < 6 && course.rating >= 3);
        OflineCourses = OflineCourses?.sort((a, b) => b.rating - a.rating).filter((course: CourseType, index: number) => index < 6 && course.rating >= 3);
        console.log(OnlineCourses, OflineCourses)
        setRecommendedOnlineCourses(OnlineCourses);
        setRecommendedOflineCourses(OflineCourses);
    }
    useEffect(() => {
        console.log(courses)
        handleCourses(courses);
        console.log(recommendedOnlineCourses.length, recommendedOflineCourses.length)
    }, [courses]);

  return (
    <section className='container mx-auto my-40'>
        <h1 className='font-semibold text-[43px]'>Best <span className='text-green+'>Recommended course</span></h1>
        <div className='flex justify-between mx-4'>
                    <h3 className='font-semibold text-[28px]'>Online</h3>
                    <Link href={'/courses'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
        </div>
        <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {
                    recommendedOnlineCourses?.length > 0 ?
                recommendedOnlineCourses.map((course:CourseType) => {
                    return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                })
                : <p>No courses available</p>
                }
        </div>
        <div className='flex justify-between mx-4'>
                    <h3 className='font-semibold text-[28px]'>In-person</h3>
                    <Link href={'/courses'} className='font-medium text-[21px] text-[#b4b4b4] underline'>View more &gt; </Link>
        </div>
        <div className='flex flex-wrap justify-start gap-7 mt-8'>
                {
                    recommendedOflineCourses?.length > 0 
                    ?   recommendedOflineCourses.map((course:CourseType) => {
                        return <CourseCard key={course._id} course={course} /> // Fix: Pass the 'course' prop to the 'CourseCard' component correctly.
                    })
                    : <p>No courses available</p>
                }
        </div>
    </section>
  
  )
}
