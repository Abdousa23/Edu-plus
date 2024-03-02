import React from 'react'
import HeroInstructor from "../components/HeroInstucter"
import HeroInstructor2 from "../components/HeroInstructor2"
import HeroInstructor3 from "../components/HeroInstructor3"
import Navbar from '../components/Navbar'
import InstructorHeroStat from '../components/InstructorHeroStat'

export default function Page() {
return (
    <div>
        <Navbar/>
        <HeroInstructor/>
        <InstructorHeroStat/>
        <HeroInstructor2/>
        <HeroInstructor3/>
    </div>
    
    )
}
