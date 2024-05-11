import Reviews from '@/app/courses/[courseId]/_components/Reviews'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Courses from './Courses'
import ErrorComponent from '@/app/_components/Error'
import CourseCard from '@/app/_components/CourseCard'
type profileType = {
    courses: CourseType[] | null,
    user: userType | null,
    error: ErrorProps | null;

}
export default function ProfileContent({ courses, user, error }: profileType) {
    const { userid } = useParams()
    const [activeTab, setActiveTab] = useState('Courses')
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab((e.target as HTMLButtonElement).name)
    }
    useEffect(() => {
        console.log(error)
        // console.log(userid)
        // console.log("here")
        console.log(courses)
    }, [courses])
    return (
        <div className='mb-16 w-3/4'>
            <div className='text-[14px] font-medium text-[#4e5566]'>
                <button className={activeTab === 'Courses' ? "py-4 px-8 mx-2 border-b-4 border-strokeorg" : "py-4 px-8 mx-2"} onClick={handleClick} name='Courses'>Courses</button>
                <button className={activeTab === 'Reviews' ? "py-4 px-8 mx-2 border-b-4 border-strokeorg" : "py-4 px-8 mx-2"} onClick={handleClick} name='Reviews'>Reviews</button>
            </div>

            {
                error?.errmessage?.length ?? 0 > 0 ? (
                    <ErrorComponent errmessage={error?.errmessage || ''} />
                ) : activeTab === 'Courses' && (
                    <div>
                        <h1 className='font-semibold text-2xl'>
                            {user?.username} Courses <span>{courses?.length}</span>
                        </h1>
                        <div className='flex flex-wrap justify-start mt-8'>
                            {
                                courses && courses.length > 0 ?
                                    courses.map(course => (
                                        <CourseCard course={course} />
                                    ))
                                    :
                                    <div>this user has no available courses </div>
                            }
                        </div>
                    </div>
                )
            }
            {
                activeTab === 'Reviews' &&
                <Reviews user={user} />
            }

        </div>
    )
}
