'use client'
import  useAuth  from '../_hooks/useAuth'; 
import { useState, useEffect } from 'react';
import withAuth from '../_HOC/withAuth';
import { useRouter } from 'next/navigation';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import MyCourses from './_components/MyCourses';
import Recommended from './_components/Recommended';
    const Home = ()=> {

    const {auth} = useAuth();
    const [courses, setCourses] = useState<CourseType[]>([]);
    const getCourses = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
          method: 'GET',
      });
      const data = await response?.json();
      if(response?.status === 403){
        throw new Error('Unauthorized');
      }
      console.log(data)
      setCourses(data);
    }
    
    useEffect(()=>{
      getCourses();
      
      console.log(courses)
    },[auth])
    return (
    <>
    <Navbar />
    <MyCourses mycourses={courses as unknown as [CourseType]} />
    <Recommended mycourses={courses as unknown as [CourseType]} />
    <Footer />
    </>
  )
}

export default withAuth(Home)