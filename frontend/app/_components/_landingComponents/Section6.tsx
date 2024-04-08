import Link from 'next/link'
import React from 'react'
import CourseCard from '../CourseCard'
export default function Section6() {
    return (
                   <section className='container mx-auto my-20'>
                <h1 className='font-semibold text-[43px] mb-10 mt-20 max-md:text-center  '>Best <span className='text-green+'>recommended courses</span></h1>
                <section>
                    <div className='flex justify-between '>
                        <h3 className='font-medium text-[31px]'>Online</h3>
                        <Link href={'/'} className='font-medium text-[24px] text-[#767676] underline'>View more &gt; </Link>
                    </div>
                    <div className='flex flex-wrap justify-center my-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    </div>
                </section>
                <section>
                    <div className='flex justify-between mx-4 '>
                        <h3 className='font-medium text-[31px]'>In-person</h3>
                        <Link href={'/'} className='font-medium text-[24px] text-[#767676] underline'>View more &gt; </Link>
                    </div>
                    <div className='flex flex-wrap justify-center my-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    </div>
                </section>
            </section>
    )
}
