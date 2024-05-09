import React from 'react'
import  Chat  from './Chat'
import useGetallChats from '../_hooks/useGetallChats'
import {useListenMessages} from '../_hooks/useListenMessages'
export default function Chats() {
  const {loading,chats} = useGetallChats()
  useListenMessages()
  return (
    <div className="flex flex-col  overflow-auto  overflow-x-hidden ">

    
      {loading ? (
        <p>Loading...</p>
      ) : (
        chats.map((chat: chatProps) => {
          return (
            <Chat
              key={chat._id}
              _id={chat._id}
              name={ chat.name }
              pic={chat.pic}
              
            />
          );
        })
      )}
    </div>
  );
}


