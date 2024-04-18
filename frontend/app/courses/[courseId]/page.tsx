'use client'
import Footer from '@/app/_components/Footer'
import Navbar from '@/app/_components/Navbar'
import {useEffect, useState} from 'react'
import CourseHeader from './_components/CourseHeader'
import CourseSidebar from './_components/CourseSidebar'
import CourseContent from './_components/CourseContent'
import { getUserData } from '@/lib/getUserData'
type Params = {
    params: {
        courseId: string
    }
}
export default function Page({params:{courseId}}:Params) {



    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string>('');
    const [course,setCourse] = useState<CourseType | undefined>(undefined);
    const [user,setUser]= useState<userType | null>(null)
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
    const fetchUser = async (id:string) => {
      const data = await getUserData(id)
      if (data.data) {
          setUser(data.data)
      }else if(data.error){
          setError("error fetching data")
      }
  }
    useEffect(() => {
        getCourseData()
        fetchUser(course?.owner||'')
        setLoading(false)
    },[])
    return (
    <>
      <Navbar />
      <CourseHeader user={user} course={course} />
        {loading ? <div>Loading...</div> : error ? <div>{error}</div> : <div> <CourseContent course={course} /></div>}
      <Footer  />
    </>
  )
}
