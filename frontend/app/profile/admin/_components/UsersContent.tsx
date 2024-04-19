import React, { useEffect } from 'react'
import UserCard from './UserCard'
export default function UserContent() {
  return (
    <div className='w-[90%] mx-auto bg-[#F9FAFB] rounded-lg '>
      <div className={`flex h-12 w-full gap-4 mx-auto justify-start items-center 'border-b-2 border-[#E9EAF0] ' `}>
        <div className='mx-2'>
         <input type="checkbox" name="" id="" />
        </div>
        <h1 className='text-[#8A92A6] text-xs font-normal mx-8'>Account</h1>
        <h1 className=' text-[#8A92A6] text-xs font-normal mx-4 max-md:hidden'>Courses</h1>
      </div>
      <div>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  )
}
