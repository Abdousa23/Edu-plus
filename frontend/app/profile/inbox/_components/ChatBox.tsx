import React, { useContext, useEffect , useRef } from 'react'
import HeaderOfMessages from './HeaderOfChat'
import Theconversataions from './Theconversations'
import MessageInput from './MessageInput'
import SelectChat from './SelectChat'
import { ChatContext } from '@/context/chatContext'

export default function ChatBox() {
const{selectedChat , setSelectedChat}= useContext(ChatContext)

 useEffect(() => {
   console.log('chatbox')
   console.log(selectedChat)
   // console.log(chat)
 }
   , [])


  return (
    
    <div className='bg-white max-md:max-h-[60vh]  min-h-70vh flex flex-col flex-1 w-full my-4 max-md:my-1 mx rounded-[8px] '>
      
      {!selectedChat ? <div className='grid place-items-center h-full'>
        <SelectChat />
      </div> : 
      <>
    <HeaderOfMessages/>
		<Theconversataions />
		<MessageInput />
    </>
    
    }
    </div>
  )
}
