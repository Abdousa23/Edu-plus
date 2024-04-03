import React from 'react'
import CourseSidebar from './CourseSidebar'
import { useState } from 'react'
import Overview from './Overview'
import Resources from './Resources'
import QandA from './QandA'
import Reviews from './Reviews'
import Link from 'next/link'
import CourseLocation from './CourseLocation'
import { Star } from '@mui/icons-material'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Person2Outlined from '@mui/icons-material/Person2Outlined'
type course = {
    course?: CourseType
  }
export default function CourseContent({course}:course) {
    const [activeTab, setActiveTab] = useState('overview')
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab((e.target as HTMLButtonElement).name)
    }
    return (
    <div className="relative min-h-96 w-full container mx-auto flex max-md:flex-col-reverse">
  <div className='flex-grow'>
    <div className='w-[90%] border rounded-xl  h-[422px]'>
        <img src="/images/landing.svg" className='w-full h-full' alt="" />
    </div>
    <div className='text-[14px] font-medium text-[#4e5566]'>
        <button className={activeTab === 'overview'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='overview'>Overview</button>
        <button className={activeTab === 'resources'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='resources'>resources <span></span></button>
        <button className={activeTab === 'Q&A'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='Q&A'>Q&A</button>
        <button className={activeTab === 'reviews'?"py-4 px-8 mx-2 border-b-4 border-strokeorg":"py-4 px-8 mx-2"} onClick={handleClick} name='reviews'>Reviews</button>
    </div>
    
        {
            activeTab === 'overview' && <div>
                <Overview course={course} />
            </div>
        }
        {
            activeTab === 'resources' && 
                <Resources course={course} />
        }
        {
            activeTab === 'Q&A' &&
                <QandA course={course} />
        }
        {
            activeTab === 'reviews' && 
                <Reviews course={course} />
        }
    
    <div>
        {course?.type === 'inperson' && <CourseLocation course={course}/>}
    </div>
    <div>
        <h1 className=' font-medium text-2xl '>Course Instructor</h1>
        <div className='border-2 border-[#6E7485] my-6 flex w-[90%] '>
            <div className=' w-32 h-32 rounded-full overflow-hidden mx-6 my-8'>
                <img src='https://res.cloudinary.com/dqnwniezl/image/upload/v1711373621/rixu2ifam0vvovqgmtaj.jpg' className='max-w-full' alt="" />
            </div>
            <div className='flex-grow'>
                <h1 className='font-medium text-lg'>John Doe</h1>
                <p>Product Manager</p>
                <ul className='flex gap-8'>
                    <li> <Star className='text-neworg' /> rating</li>
                    <li><Person2Outlined /> student</li>
                    <li><PlayCircleOutlinedIcon className='text-strokeorg' /> courses</li>
                </ul>
                <p className=' font-normal text-sm text-[#6e7485]'>description</p>
                <Link href={`/instructor/${course?.owner}`}>Read more</Link>
            </div>
        </div>
    </div>
  </div>
  <div className='max-md:relative sticky my-8 top-0 w-[35%] max-md:w-full'>
    <CourseSidebar course={course} />
  </div>
</div>
  )
}
