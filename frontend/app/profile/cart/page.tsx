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
    
    const purchaseCourse = (course : CourseType)=>{
        const body =`{"items":[{"price":"${course?.price}","quantity":1,"product_id":"${course?._id}"}],"success_url":"http://127.0.0.1:3001"}` 
        const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_apiPaymentSecretKey}` ,
            "Content-Type": "application/json",
        },
        body:body,
    };
        console.log(body)
        fetch("https://pay.chargily.net/test/api/v2/checkouts", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
    const removeCourseFromCart = async (course : CourseType)=>{
        try {
            const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/cart/remove/${course._id}`,{
                method: 'DELETE'
            })
            const data = await response?.json()
            if(!response?.ok){
                throw new Error(data.message)
            }
            console.log(data)
            getCartCourses()
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
                                <div key={course._id}>
                                    <button  onClick={()=>{purchaseCourse(course)}}>purchaseCourse</button>
                                    <button onClick={()=>{removeCourseFromCart(course)}}>delete from cart</button>
                                </div>
                            ))
                            : <p>h1</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
