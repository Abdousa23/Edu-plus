import React, { useContext, useEffect } from 'react'
import  Chat  from './Chat'
import { useState } from 'react'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
import { ChatContext } from '@/context/chatContext'

export default function Chats() {
  const {chats,getAllChats,selectedChat,setSelectedChat} = useContext(ChatContext)
  
  useEffect(() => {
    getAllChats()
  }, [])
  return (
    <div className=" flex flex-col  max-md:flex-row overflow-x-auto ">
      {chats && chats?.length > 0 ? (
        chats.map((chat: any) => {
          return (
            <Chat
              key={chat._id}
              chat={chat}
             />
          );
        })
      ):
        <p>no chats available</p>
      }
    </div>
  );
}


