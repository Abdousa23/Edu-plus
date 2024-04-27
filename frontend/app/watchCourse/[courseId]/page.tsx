'use client'
import React from 'react'
import Course from '@/app/courses/[courseId]/_components/Course'
type Params = {
  params: {
      courseId: string
  }
}
export default function page({params:{courseId}}:Params) {

  return (
    <Course params={{courseId}} />
  )
}