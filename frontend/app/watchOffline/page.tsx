'use client'
import React from 'react'
import CourseContent from '../courses/[courseId]/_components/CourseContent'
import CourseHeader from '../courses/[courseId]/_components/CourseHeader'

export default function page() {
  return (
    <div>
      <CourseHeader user={null} />
      <CourseContent purshased={true}/>
    </div>
  )
}
