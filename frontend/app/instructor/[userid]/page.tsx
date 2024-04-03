'use client'
import React from 'react'
import HeroInstructor from "../_components/HeroInstucter"
import HeroInstructor2 from "../_components/HeroInstructor2"
import HeroInstructor3 from "../_components/HeroInstructor3"
import Navbar from '../../_components/Navbar'
import InstructorHeroStat from '../_components/InstructorHeroStat'
import ProfileHeader from '../_components/ProfileHeader'
import Footer from '../../_components/Footer'

export default function Page() {
return (
    <div>
        <Navbar/>
        {/* <HeroInstructor/>
        <InstructorHeroStat/>
        <HeroInstructor2/>
        <HeroInstructor3/> */}
        <div className='container mx-auto'>
        <ProfileHeader user="john doe" />
        </div>
        <Footer />
    </div>
    
    )
}
