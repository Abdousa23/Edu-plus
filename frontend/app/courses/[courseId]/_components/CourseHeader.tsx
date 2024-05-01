import React, { use } from 'react'
import { Star } from '@mui/icons-material'
import { StarHalf } from '@mui/icons-material'
import { StarOutline } from '@mui/icons-material'
import useAuth from '@/app/_hooks/useAuth'
import { useEffect } from 'react'
type course = {
  course?: CourseType
  user:userType | null
}

export default function CourseHeader({ course,user }: course) {
  const { auth } = useAuth()
  function renderStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {Array(fullStars).fill(null).map((_, i) => <span key={i}><Star className='text-org'></Star></span>)}
        {halfStar && <span><StarHalf className='text-org' /></span>}
        {Array(emptyStars).fill(null).map((_, i) => <span key={i + fullStars + (halfStar ? 1 : 0)}><StarOutline className='text-org'></StarOutline></span>)}
      </>
    );
  }
  useEffect(() => {
    console.log('users')
    console.log(user)
  }, [])
  return (
    <div className='bg-[#fffaf5] w-full py-4'>
      <div className='container mx-auto max-md:text-center '>
        <h1 className='text-[40px] max-md:text-[35px] my-4  font-extrabold'>Course <span className='text-green+'>"details"</span></h1>
        <h2 className='text-[35px] max-md:text-[30px] my-4 font-extrabold'>{course?.title}</h2>
        <p className='text-[20px] text-[#4d4d4d] font-normal' >{course?.description}</p>
        <div className='text-[22px] max-md:w-fit max-md:mx-auto font-medium flex items-center '>
          <div>
            <span className='text-org'>{course?.rating}</span>
          </div>
          <div className='flex justify-center items-center mb-1'>
            {renderStars(course?.rating || 0)}
          </div>
          <div>
            <span className='text-[#737373]'>({course?.studentEnrolled?.studentsNumber})</span>
          </div>
        </div>
        <div className='flex justify-around my-4 w-fit max-md:mx-auto'>
          <div className='w-10 h-10 rounded-full overflow-hidden mx-2'>
            <img className='max-w-full' src={user?.pfp?.url || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} alt="" />
          </div>
          <div>
            <p className='text-[14px] text-[#6e7485] font-normal'>Created by</p>
            <h3 className='font-medium text-base'>{user?.username||"unknown"}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
