import React, { useContext } from 'react'
import { ChatContext } from '@/context/chatContext'

export default function HeaderOfChat() {

  const { selectedChat } = useContext(ChatContext)


  return (
    <div className='flex mx-5  pb-1 my-4 border-b  border-gray  justify-start items-center gap-5'>
      <div className=' w-14 h-14 max-md:w-8 max-md:h-8'>
        <img src={selectedChat?.pic} alt="selectedchat" className=' max-w-full rounded-full' />

      </div>
      <p className='text-2xl font-bold max-md:text-xs'>  {selectedChat?.name}</p>
    </div>
  )
}
