import CourseCard from '@/app/_components/CourseCard'
import Reviews from '@/app/courses/[courseId]/_components/Reviews'
import MyCourses from '@/app/home/_components/MyCourses'
import React from 'react'
import { useState } from 'react'
type profileType = {
    user: userType | null
}
export default function ProfileContent({user}:profileType) {
    const [activeTab, setActiveTab] = useState('Courses')
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab((e.target as HTMLButtonElement).name)
    }
    return (
    <div className='mb-16 w-3/4'>
        <div className='text-[14px] font-medium text-[#4e5566]'>
        <button className={activeTab === 'Courses'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='Courses'>Courses</button>
        <button className={activeTab === 'Reviews'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='Reviews'>Reviews</button>
    </div>
      
      {
            activeTab === 'Courses' && <div>
                <h1 className='font-semibold text-2xl'>{user?.username} Courses <span></span></h1>
                <div className='flex flex-wrap justify-start mt-8'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                
                </div>
            </div>
        }
        {
            activeTab === 'Reviews' && 
            <Reviews />
        }
    
    </div>
  )
}
