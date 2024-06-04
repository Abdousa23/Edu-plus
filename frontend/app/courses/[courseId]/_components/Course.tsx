'use client'
import Footer from '@/app/_components/Footer'
import Navbar from '@/app/_components/Navbar'
import { useEffect, useState } from 'react'
import CourseSidebar from './CourseSidebar'
import CourseHeader from './CourseHeader'
import CourseContent from './CourseContent'
import { getUserData } from '@/lib/getUserData'
import useAuth from '@/app/_hooks/useAuth'
type Params = {
  params: {
    courseId: string
  }
}
export default function Course({ params: { courseId } }: Params) {
  const { auth } = useAuth()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [course, setCourse] = useState<CourseType | undefined>(undefined);
  const [user, setUser] = useState<userType | null>(null)
  const purshased = courseId && auth?.user?.purchasedcourses?.includes(courseId) ? true : false
  const getCourseData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/${courseId}`)
      const data: CourseType = await response?.json();
      if (response?.status === 404) {
        throw new Error('Not Found');
      }
      console.log(data)
      setCourse(data);
      setUser(data.owner)
      console.log(data.owner)

    } catch (error: any) {
      setError(error.message)
    }
  }
  const fetchUser = async (id: string) => {
    const data = await getUserData(id)
    if (data.data) {
      setUser(data.data)
    } else if (data.error) {
      setError("error fetching data")
    }
  }
  useEffect(() => {
    getCourseData()
    setLoading(false)
    console.log(purshased)
    console.log("thiiiiiis")
    console.log(course)
  }, [])
  return (
    <>
      <Navbar />
      <CourseHeader user={user} course={course} />
      {loading ? <div>Loading...</div> : error ? <div>{error}</div> : <div> <CourseContent course={course} purshased={purshased} user={user} /></div>}
      <Footer />
    </>
  )
}
