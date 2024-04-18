import React from 'react'
import  Chat  from './Chat'
import useGetallChats from '../_hooks/useGetallChats'






export default function Chats() {
  const {loading,chats} = useGetallChats()
  return (
    <div className="flex flex-col h-[50vh] overflow-auto ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        chats.map((chat: chatProps) => {
          return (

            <Chat
              key={chat._id}
              _id={chat._id}
              name={ chat.name }
            />
          );
        })
      )}
    </div>
  );
}


