import React, { useEffect } from 'react'
import { Star, Person2Outlined, PlayCircleOutlined as PlayCircleOutlinedIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getUserCourses } from '@/lib/getuserCourses';
import { useState } from 'react';
type profileType = {
    courses: CourseType[] | null,
    user:userType | null

}
export default function ProfileHeader( {courses,user}:profileType) {
    const {userid} = useParams()
    // const [error, setError] = useState<ErrorProps>({errmessage:''})
    // const [courses, setCourses] = useState<CourseType[]>([])
    const [rating, setRating] = useState<number>(0)
    const getRating = (courses:CourseType[]|null)=>{
        let num=1
        let rating = 0;
        if(courses){
            courses && courses.map((course:CourseType) => {
                rating += course.rating
                num++
            })    
        }else{
            rating=0
        }
        return rating/num || 0
    }
    useEffect(()=>{
        const rating = getRating(courses)
        setRating(rating)
    },[])
return (
    <div>
        <h1 className=' font-medium text-2xl '>Course Instructor</h1>
        <div className='border-2 border-[#6E7485] my-6 flex w-[90%] '>
            <div className=' w-32 h-32 rounded-full overflow-hidden mx-6 my-8'>
                <img src={user?.pfp.url || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'} className='max-w-full' alt="" />
            </div>
            <div className='flex-grow'>
                <h1 className='font-medium text-lg'>{user?.username || 'unknown'}</h1>
                <p>{user?.city}{user?.country}</p>
                <p>Contact with : {user?.email} {user?.phonenumber}</p>
                <ul className='flex gap-8'>
                    <li> <Star className='text-neworg' />{rating} rating</li>
                    <li><Person2Outlined /> {
                        Object.values(user?.roles || {}).includes(5150) ? 'admin'
                        : Object.values(user?.roles || {}).includes(5100) ? 'mod':
                        Object.values(user?.roles || {}).includes(3000) ? 'instructor' : 'student'
                    }</li>
                    <li className='flex items-center'><PlayCircleOutlinedIcon className='text-strokeorg' />{user?.courses.length} courses</li>
                </ul>
                <p className=' font-normal text-sm text-[#6e7485]'>{user?.bio || (user?.username||'unknown')+' profile page'}</p>
                {
                userid !== user?._id && <Link href={`/profile/${user?._id}`}>Read more</Link>
                }
                
            </div>
        </div>
    </div>
  )
}
