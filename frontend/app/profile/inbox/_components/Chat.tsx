import useAuth from '@/app/_hooks/useAuth';
import { ChatContext } from '@/context/chatContext';
import React, { useContext, useEffect } from 'react';
type ChatProps = {
  chat:any
};

export default function Chat({ chat }: ChatProps) {
  const { setSelectedChat, selectedChat,socket } = useContext(ChatContext)
  const {auth} = useAuth()
  const infoAbouTheChat:selectedChat = {
    _id: chat._id,
    name: chat.name,
    pic: chat.pic,
    members: chat.members,
    messages: chat.messages,
  }

  const handleClick = () => {
    setSelectedChat(infoAbouTheChat);
    console.log(infoAbouTheChat._id)
    socket.emit('join_room',{user:auth?.user ,id:infoAbouTheChat._id});
  };
  useEffect(() => {
    console.log(chat)
    console.log('test')
  }, []);
  return (
    <div className= {` h-16 flex gap-2 items-center px-5 py-2 max-md:py-1 max-md:px-1 text-black  cursor-pointer ${selectedChat?.name==infoAbouTheChat.name ?'bg-[#C4E7E1]':' '} ` } onClick={handleClick}>
      <div className='flex justify-start gap-4 items-center w-[95%]'>
      <img src={infoAbouTheChat.pic} alt="category pic" className=' h-10 w-10 rounded-full' />
      <p className="max-md:hidden   " >{infoAbouTheChat.name}</p>
      </div>
      
    </div>
  );
}
