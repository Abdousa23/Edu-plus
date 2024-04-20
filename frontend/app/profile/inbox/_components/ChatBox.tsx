import React, { useEffect } from 'react'
import HeaderOfMessages from './HeaderOfChat'
import Theconversataions from './Theconversations'
import MessageInput from './MessageInput'
import useChat from '../zustand/useChat'
import SelectChat from './SelectChat'

export default function ChatBox() {

const {selectedChat , setSelectedChat} =useChat()


useEffect(() => {
  setSelectedChat(null)}
  , [setSelectedChat])


  return (
    
    <div className=' w-[50vw] h-[95vh] '>
      {!selectedChat ? <SelectChat /> : 
      <>
    <HeaderOfMessages/>
		<Theconversataions />
		<MessageInput />
    </>
    
    }
    </div>
  )
}
