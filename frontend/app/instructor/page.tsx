import React from 'react'
import HeroInstructor from "./_components/HeroInstucter"
import HeroInstructor2 from "./_components/HeroInstructor2"
import HeroInstructor3 from "./_components/HeroInstructor3"
import Navbar from '../_components/Navbar'
import InstructorHeroStat from './_components/InstructorHeroStat'

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
