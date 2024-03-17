'use client'
import  useAuth  from '../_hooks/useAuth'; 
import { useState, useEffect } from 'react';
import useFetchPrivate from '../_hooks/useFetchPrivate';
import useRefreshToken from '../_hooks/useRefreshToken';
import withAuth from '../_HOC/withAuth';
import useLogout from '../_hooks/useLogout';
import { useRouter } from 'next/navigation';
import PersistLogin from '../_HOC/PersistLogin';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import MyCourses from './_components/MyCourses';
import Recommended from './_components/Recommended';
    const Home = ()=> {
    const {auth} = useAuth();
    const fetchPrivate = useFetchPrivate();
    const user=auth?.user 
    const logout = useLogout();
    const router = useRouter();
    const [courses, setCourses] = useState(null);
    // console.log(user)
    // console.log(auth)
    const signout = async ()=>{
      await logout();
      router.push('/auth/login');
    }
    const getCourses = async () => {
      
       
        const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
          method: 'GET',
      });
      const data = await response?.json();
      if(response?.status === 403){
        throw new Error('Unauthorized');
      }
      console.log(data)
      setCourses(data);
      console.log(courses)
    }
    const Refresh=useRefreshToken(); // Cast Refresh as a function type
    useEffect(()=>{
      getCourses();
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