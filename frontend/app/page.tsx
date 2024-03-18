'use client'
import Logged from './_HOC/logged';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import SearchSection from './_components/_landingComponents/SearchSection';
import Section1 from './_components/_landingComponents/Section1';
import Section2 from './_components/_landingComponents/Section2';
import Section3 from './_components/_landingComponents/Section3';
import Section4 from './_components/_landingComponents/Section4';
import Section5 from './_components/_landingComponents/Section5';
import Section6 from './_components/_landingComponents/Section6';
import Section7 from './_components/_landingComponents/Section7';
import useAuth from './_hooks/useAuth';
import useFetchPrivate from './_hooks/useFetchPrivate';
import { useEffect,useState } from 'react';
const Home = () => {
    const {auth} = useAuth();
    const fetchPrivate = useFetchPrivate();
    const [courses,setCourses] = useState<CourseType[]>([]);
    const getCourses = async () => {
      
       
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
        method: 'GET',
    });
    const data = await response?.json();
    if(response?.status === 403){
      throw new Error('Unauthorized');
    }
    setCourses(data);
  }
  useEffect(()=>{
    getCourses();
  },[])
  return (
    <>
    <Navbar />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <SearchSection />
    <Section6 courses={courses} />
    <Section7 />
    <Footer />
    </>

  )
    
}

export default Logged(Home)