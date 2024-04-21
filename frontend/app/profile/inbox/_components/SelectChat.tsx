import React from 'react'
import useAuth from '@/app/_hooks/useAuth'

export default function SelectChat() {
    const { auth } = useAuth()
    
  return (
    <div className=' flex flex-col  gap-10'>
      <div className='flex flex-col   items-center gap-10'>
            <p className='text-3xl font-[500] '>  hiii  {auth?.user?.firstname} </p>
            <img src={auth?.user?.pfp.url } alt="test" className='rounded-full '  />
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl font-[500]' >
        please select a chat
        to start chatting
        </p>
        </div>
    </div>
  )
}
