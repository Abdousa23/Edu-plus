import React from 'react'
import useChat from '../zustand/useChat'

export default function HeaderOfChat() {
    
    const {selectedChat} =useChat()


  return (
    <div className='flex  justify-center items-center gap-5'>
         <img src={selectedChat?.pic} alt="selectedchat" className='h-20 w-20 rounded-full'  /> 
        <p className='text-2xl font-bold'>  {selectedChat?.name}</p>
    </div>
  )
}
