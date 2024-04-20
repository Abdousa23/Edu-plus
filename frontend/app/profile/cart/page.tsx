'use client'

import { useEffect, useState } from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import CartContent from './_components/CartContent'
export default function page() {
    const [cartCourses, setCartCourses] = useState<CourseType[]>([])
    return (
        <div className='flex bg-[#E9EAF0] w-full box-border'>
            <Sidebar />
            <div className='flex-grow  box-border w-3/4 '>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  '>
                        <Navbar />
                        <h1 className=' font-semibold text-xl ml-8 my-8 '>My cart</h1>
                        {/* {
                            cartCourses.length > 0 ?
                            cartCourses.map((course: CourseType) => (
                                <div key={course._id}>
                                    <button  onClick={()=>{purchaseCourse(course)}}>purchaseCourse</button>
                                    <button onClick={()=>{removeCourseFromCart(course)}}>delete from cart</button>
                                </div>
                            ))
                            : <p>sh1</p>
                        } */}
                        <CartContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
