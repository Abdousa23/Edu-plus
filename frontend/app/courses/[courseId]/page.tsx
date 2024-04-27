'use client'
import React, { useEffect } from 'react'
import Course from './_components/Course'
type Params = {
  params: {
      courseId: string
  }
}
export default function page({params:{courseId}}:Params) {
  useEffect(()=>{
    console.log("hello")
    console.log(courseId)
  },[])

  return (
    <Course params={{courseId}} />
  )
}
