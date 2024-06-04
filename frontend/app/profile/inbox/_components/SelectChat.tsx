import React from 'react'
import useAuth from '@/app/_hooks/useAuth'

export default function SelectChat() {
  const { auth } = useAuth()

  return (
    <div className=' flex flex-col justify-around items-center h-1/2 '>
        <p className='text-3xl font-[500] '>  Hi! 👋  {auth?.user?.firstname} </p>
        <div>
          <img src={auth?.user?.pfp.url} alt="test" className='rounded-full  h-16 w-16' />

        </div>
        <p className='text-2xl font-[500]' >
        please select a chat
        to start chatting
        </p>
      </div>
  )
}
