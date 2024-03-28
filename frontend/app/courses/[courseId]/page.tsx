'use client'
import Footer from '@/app/_components/Footer'
import Navbar from '@/app/_components/Navbar'
import {useEffect, useState} from 'react'
import CourseHeader from './_components/CourseHeader'
import CourseSidebar from './_components/CourseSidebar'
import CourseContent from './_components/CourseContent'
type Params = {
    params: {
        courseId: string
    }
}
export default function page({params:{courseId}}:Params) {
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string>('');
    const [course,setCourse] = useState<CourseType | undefined>(undefined);
    const getCourseData = async () => {
       try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/${courseId}`)
        const data:CourseType = await response?.json();
        if(response?.status === 404){
            throw new Error('Not Found');
        }
        console.log(data)
        setCourse(data);
    
       } catch (error: any) {
        setError(error.message)    
       }
    }
    useEffect(() => {
        getCourseData()
        setLoading(false)
    },[])
    return (
    <>
      <Navbar />
      <CourseHeader course={course} />
        {loading ? <div>Loading...</div> : error ? <div>{error}</div> : <div>course page</div>}
      <CourseContent course={course} />
      <Footer  />
    </>
  )
}
