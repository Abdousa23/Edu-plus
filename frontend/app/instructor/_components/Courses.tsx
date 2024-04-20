import CourseCard from '@/app/_components/CourseCard'
import React from 'react'

type compType = {
    courses: CourseType[] | null,
}

export default function Courses({courses}:compType) {
    return (
        <>
        {
            courses && courses.length>0 ?
            courses.map(course=>{
                <CourseCard course={course} />
            })
            :
            <div>this user has no available courses </div>
        }
        </>
    )
}
