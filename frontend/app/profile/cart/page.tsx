'use client'

import {useEffect, useState} from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar' 
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
export default function page() {
    const [cartCourses, setCartCourses] = useState<CourseType[]>([])
    const fetchPrivate = useFetchPrivate()

    const getCartCourses = async () => {
        try {
            const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/cart`,{
                method: 'GET'
            
            })
            const data = await response?.json()
            if(!response?.ok){
                throw new Error(data.message)
            }
            setCartCourses(data?.courses)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCartCourses()
    }, [])
    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container mx-auto'>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  '>
                        <Navbar />
                        <h1 className=' font-semibold text-xl ml-8 my-8 '>My cart</h1>
                        {
                            cartCourses.length > 0 ?
                            cartCourses.map((course: CourseType) => (
                                <h1 key={course._id}>{course.title} </h1>
                            ))
                            : <p>h1</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
