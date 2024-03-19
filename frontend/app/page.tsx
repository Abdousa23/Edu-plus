'use client'
import Navbar from './_components/Navbar';
import Section1 from './_components/_landingComponents/Section1';
import useAuth from './_hooks/useAuth';
export default function Home() {
    const {auth} = useAuth();
  return (
    <>
    <Navbar />
    <Section1 />
    </>
  )
}
