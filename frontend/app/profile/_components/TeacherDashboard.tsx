import React, { use, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from '@/app/_components/Navbar'
import DataCube from './_teacherComponents/DataCube';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import { get } from 'http';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import YourBestCourses from './_teacherComponents/YourBestCourses';
import RatingsChart from './_teacherComponents/RatingsChart';
import PiesChart from './_teacherComponents/PieChart';


const DV = DomainVerificationOutlinedIcon
const PP = PlayCircleFilledRoundedIcon
const EN = EventNoteOutlinedIcon
const PM = PaymentsOutlinedIcon
const colors1 = {
  background: 'bg-[#FFEEE8]',
  textColor: 'text-[#FF8F6B]'
}

const colors2 = {
  background: 'bg-[#EBEBFF]',
  textColor: 'text-[#564FFD]'
}
const colors3 = {
  background: 'bg-[#E1F7E3]',
  textColor: 'text-[#23BD33]'
}
const colors4 = {
  background: 'bg-[#F5F7FA]',
  textColor: 'text-[#1D2026]'
}


export default function TeacherDashboard() {
  const [data, setData] = useState(0)
  const [data1, setData1] = useState(0)
  const [data2, setData2] = useState(0)
  const [data3, setData3] = useState(0)
  const [onlineStudents, setOnlineStudents] = useState(0)
  const [offlineStudents, setOfflineStudents] = useState(0)
  const [courses, setCourses] = useState<any>([])
  const [rating, setRating] = useState<any>([])
  const FetchPrivate = useFetchPrivate()

  const getEnrolledStudents = async () => {
    try {
      const getStudents = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/enrolled`, { 'Method': 'GET' })
      const students = await getStudents?.json()
      console.log(students)
      setData(students.studentsNumber)
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const getCourses = async (type: string) => {
    try {
      const getCourses = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/all/teacher/${type}`, { 'Method': 'GET' })
      const courses = await getCourses?.json()
      console.log(courses)

      if (type === 'online') {
        const tot = courses.reduce((acc: any, course: any) => {
          console.log('111111', course.studentEnrolled.studentsNumber)
          return acc + course?.studentEnrolled?.studentsNumber * course.price
        }, 0)
        const tot2 = courses.reduce((acc: any, course: any) => {
          console.log('111111', course.studentEnrolled.studentsNumber)
          return acc + course?.studentEnrolled?.studentsNumber
        }, 0)
        const tot3 = courses.length
        setData1(tot3)
        setOnlineStudents(tot2)
        setData3(prevData => prevData + tot)

      }

      else {
        setData2(courses.length)
        const tot = courses.reduce((acc: any, course: any) => {
          return acc + course?.studentEnrolled?.studentsNumber * course.price
        }, 0)
        setData3(prevData => prevData + tot)
        const tot2 = courses.reduce((acc: any, course: any) => {
          console.log('111111', course.studentEnrolled.studentsNumber)
          return acc + course?.studentEnrolled?.studentsNumber
        }, 0)
        setOfflineStudents(tot2)
      }
      console.log('sss', data3)
    }

    catch (err) {
      console.log(err)
    }
  }
  const getAllCourses = async () => {
    try {
      const getCourses = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/all/teacher`, { 'Method': 'GET' })
      const courses = await getCourses?.json()
      courses.sort((course1: any, course2: any) => {
        return course2.studentEnrolled.studentsNumber - course1.studentEnrolled.studentsNumber
      })
      let arr = []
      for (let i = 0; i < 4; i++) {

        if (courses[i]) {
          arr.push(courses[i])
        }

      }
      setCourses(arr)
    }

    catch (err) {
      console.log(err)
    }
  }

  const getAllratings = async () => {
    try {
      const getRatings = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/reviews/totalratings`, { 'Method': 'GET' })
      const ratings = await getRatings?.json()
      setRating(ratings)
      console.log(ratings)
    }
    catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getEnrolledStudents()
    getCourses('online')
    getCourses('inperson')
    getAllCourses()
    getAllratings()
  }, [])
  return (
    <div className='flex bg-[#E9EAF0]'>
      <Sidebar />
      <div className='flex container mx-auto'>
        <div className='flex-grow'>
          <div className=' text-[#1d2026]  grid grid-flow-dense my-2'>
            <Navbar />



            <div className='flex flex-col sm:flex-row gap-[2%] my-6'>
              <DataCube data={data} dataOf='Enrolled students' Icon={PP} colors={colors1} />
              <DataCube data={data1} dataOf='Online courses' Icon={DV} colors={colors2} />
              <DataCube data={data2} dataOf='in person courses' Icon={EN} colors={colors3} />
              <DataCube data={`${data3} $`} dataOf='total earnings' Icon={PM} colors={colors4} />

            </div>


            <div className='flex content-center justify-between max-md:flex-col'>
              <RatingsChart ratings={rating} />
              <div className='flex flex-col'>
                <PiesChart value={onlineStudents} value1={offlineStudents} />
                <YourBestCourses course={courses} />
              </div>
            </div>



            {/*  <h1 className=' bold text-2xl ml-8 my-8 '>{courses[0]?.title}</h1> */}
          </div>
        </div>
      </div>
    </div>
  )
}
