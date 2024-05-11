'use client'
import  useAuth  from '../_hooks/useAuth'; 
import { useState, useEffect } from 'react';
import withAuth from '../_HOC/withAuth';
import { useRouter } from 'next/navigation';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import MyCourses from './_components/MyCourses';
import Recommended from './_components/Recommended';
import { getUserCourses } from '@/lib/getuserCourses';
    const Home = ()=> {
      
    const {auth} = useAuth();
    const [courses, setCourses] = useState<CourseType[]>([]);
    const [myCourses, setMyCourses] = useState<CourseType[]>([]);
    const getCourses = async () => {
       try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
          method: 'GET',
      });
      const data = await response?.json();
      if(response?.status === 403){
        throw new Error('Unauthorized');
      }
      console.log(data)
      setCourses(data);
       } catch (error: any) {
        console.log(error.message)
       }
    }
    const signGoogle = async ()=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google/protected`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include',
      })
      const result = await response.json();
      console.log(result)
  }
    const getMyCourses = async () => {
      const response = await getUserCourses(auth?.user._id);
      const usercourses = response.data.courses
      console.log(usercourses)
      console.log('ss')
      setMyCourses(usercourses);
    }


    useEffect(()=>{
      signGoogle()
      getCourses();
      getMyCourses()
      console.log(courses)
    },[auth])
    return (
    <>
    <Navbar />
    <MyCourses mycourses={myCourses as unknown as [CourseType]} />
    <Recommended mycourses={courses as unknown as [CourseType]} />
    <Footer />
    </>
  )
}

export default withAuth(Home)