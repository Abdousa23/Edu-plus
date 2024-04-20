import React from 'react'
import useChat from '../zustand/useChat'

export default function HeaderOfChat() {
    
    const {selectedChat} =useChat()


  return (
    <div className='flex  justify-center items-center'>
         <img src={selectedChat?.pic} alt="selectedchat" className='h- w-20 rounded-full'  /> 
        <p className='text-2xl font-bold'>{selectedChat?.name}</p>
    </div>
  )
}
