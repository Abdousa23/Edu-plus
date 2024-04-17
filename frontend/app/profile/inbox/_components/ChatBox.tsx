import React, { useEffect } from 'react'
import HeaderOfMessages from './HeaderOfChat'
import Theconversataions from './Theconversations'
import MessageInput from './MessageInput'
import useChat from '../zustand/useChat'

export default function ChatBox() {

const {selectedChat , setSelectedChat} =useChat()


useEffect(() => {
  setSelectedChat(null)}
  , [setSelectedChat])


  return (
    <div className='bg-blue-200 w-[50vw] h-[85vh]'>
    <HeaderOfMessages/>
		<Theconversataions />
		<MessageInput />
    </div>
  )
}
