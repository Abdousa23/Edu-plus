import React from 'react';
import useChat from "../zustand/useChat"; // Assuming you import the useChat hook from the correct location

type ChatProps = {
  _id : string;
  name: string
  pic: string 
};

export default function Chat({ _id, name , pic }: ChatProps) {
  const { setSelectedChat, selectedChat } = useChat();

  const infoAbouTheChat:selectedChat = {
    _id: _id,
    name: name,
    pic:pic,
  }

  const handleClick = () => {
    setSelectedChat(infoAbouTheChat);
    
  };

  return (
    <div className= {` flex gap-2 items-center rounded p-2 py-1 text-black  cursor-pointer ${selectedChat?.name==infoAbouTheChat.name ?'bg-[#C4E7E1]':' '} ` } onClick={handleClick}>
      <img src={infoAbouTheChat.pic} alt="category pic" className=' h-10 w-10 rounded-full' />
      <p className="hidden sm:inline-block   " >{infoAbouTheChat.name}</p>
      
      
    </div>
  );
}
