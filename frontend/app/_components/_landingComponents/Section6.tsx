import Link from 'next/link'
import React from 'react'
import CourseCard from '../CourseCard'
import { Recommend } from '@mui/icons-material'
import Recommended from '@/app/home/_components/Recommended'
export default function Section6(courses:any) {
    const mycourses = courses.courses
    return (
        <section className='container mx-auto'>
            {/* <h1 className='font-semibold text-[43px] my-8 max-md:text-center'>Best <span className='text-green+'>recommended courses</span></h1>
            <section>
                <div className='flex justify-between mx-4'>
                    <h3 className='font-medium text-[31px]'>Online</h3>
                    <Link href={'/'} className='font-medium text-[24px] text-[#767676] underline'>View more &gt; </Link>
                </div>
                <div className='flex flex-wrap justify-center'>
                <CourseCard />
                <CourseCard  />
                <CourseCard />
                </div>
            </section>
            <section>
                <div className='flex justify-between mx-4 '>
                    <h3 className='font-medium text-[31px]'>In-person</h3>
                    <Link href={'/'} className='font-medium text-[24px] text-[#767676] underline'>View more &gt; </Link>
                </div>
                <div className='flex flex-wrap justify-center'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                </div>
            </section> */}
            <Recommended mycourses={mycourses} />
        </section>
    )
}
