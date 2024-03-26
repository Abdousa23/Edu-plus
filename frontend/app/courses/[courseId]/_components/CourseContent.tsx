import React from 'react'
import CourseSidebar from './CourseSidebar'
import { useState } from 'react'
import Overview from './Overview'
import Resources from './Resources'
import QandA from './QandA'
import Reviews from './Reviews'
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
    <div>
        <img src="" alt="" />
    </div>
    <div>
        <button onClick={handleClick} name='overview'>Overview</button>
        <button onClick={handleClick} name='resources'>resources <span></span></button>
        <button onClick={handleClick} name='Q&A'>Q&A</button>
        <button onClick={handleClick} name='reviews'>Reviews</button>
    </div>
    <div>
        {
            activeTab === 'overview' && <div>
                <h1>Course Overview</h1>
                <Overview />
            </div>
        }
        {
            activeTab === 'resources' && <div>
                <h1>Course Resources</h1>
                <Resources />
            </div>
        }
        {
            activeTab === 'Q&A' && <div>
                <h1>Course Q&A</h1>
                <QandA />
            </div>
        }
        {
            activeTab === 'reviews' && <div>
                <h1>Course Reviews</h1>
                <Reviews />
            </div>
        }
    </div>
    <div>
        <h1>Course Instructor</h1>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>John Doe</h1>
                <p>Product Manager</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>description</p>
            </div>
        </div>
    </div>
  </div>
  <div className='sticky my-8 top-0 w-[35%] max-md:w-full'>
    <CourseSidebar course={course} />
  </div>
</div>
  )
}
