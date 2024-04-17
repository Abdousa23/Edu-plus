import React from 'react';
import useChat from "../zustand/useChat"; // Assuming you import the useChat hook from the correct location

type ChatProps = {
  _id : string;
  name: string
};

export default function Chat({ _id, name }: ChatProps) {
  const { setSelectedChat, selectedChat } = useChat();

  const infoAbouTheChat:selectedChat = {
    _id: _id,
    name: name,
  }

  const handleClick = () => {
    setSelectedChat(infoAbouTheChat);
    
  };

  return (
    <div className= {` flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${selectedChat?.name==infoAbouTheChat.name ?'bg-slate-500':''} ` } onClick={handleClick}>
      <p className="font-bold text-gray-200 " >{infoAbouTheChat.name}</p>
    </div>
  );
}
