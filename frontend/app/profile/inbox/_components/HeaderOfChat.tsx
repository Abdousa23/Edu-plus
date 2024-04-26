import React from 'react'
import useChat from '../zustand/useChat'

export default function HeaderOfChat() {
    
    const {selectedChat} =useChat()


  return (
    <div>
        {/* <img src="" alt="selectedchat" /> */}
        {selectedChat?.name}
    </div>
  )
}
