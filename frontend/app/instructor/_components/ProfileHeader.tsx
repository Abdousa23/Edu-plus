import React from 'react'
import { Star, Person2Outlined, PlayCircleOutlined as PlayCircleOutlinedIcon } from '@mui/icons-material';
import Link from 'next/link';

type profileType = {
    user: string
}
export default function ProfileHeader( {user} : profileType) {
  return (
    <div>
        <h1 className=' font-medium text-2xl '>Course Instructor</h1>
        <div className='border-2 border-[#6E7485] my-6 flex w-[90%] '>
            <div className=' w-32 h-32 rounded-full overflow-hidden mx-6 my-8'>
                <img src='https://res.cloudinary.com/dqnwniezl/image/upload/v1711373621/rixu2ifam0vvovqgmtaj.jpg' className='max-w-full' alt="" />
            </div>
            <div className='flex-grow'>
                <h1 className='font-medium text-lg'>John Doe</h1>
                <p>Product Manager</p>
                <ul className='flex gap-8'>
                    <li> <Star className='text-neworg' /> rating</li>
                    <li><Person2Outlined /> student</li>
                    <li><PlayCircleOutlinedIcon className='text-strokeorg' /> courses</li>
                </ul>
                <p className=' font-normal text-sm text-[#6e7485]'>description</p>
                <Link href={`/profile/${user}`}>Read more</Link>
            </div>
        </div>
    </div>
  )
}
