import React, { useContext } from 'react'
import { useRef , useEffect } from 'react'
import OneMessage from './OneMessage'
import useAuth from '@/app/_hooks/useAuth'
import { ChatContext } from '@/context/chatContext'
type MessageType = {
  _id: string;
  chat: string;
  sender: userType;
  senderphp: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}


type messageProps={
_id: string;
sender: string;
senderphp: string;
message: string;
createdAt: string;
}

export default function Theconversations() {

  const {auth,setAuth}=useAuth()
  const {selectedChat,messages,setMessages,getMessages}=useContext(ChatContext)
  const user:userType = auth?.user
  const {socket} = useContext(ChatContext)

  const lastMessageRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    getMessages(selectedChat?._id)
    console.log(messages)
  },[selectedChat])
  useEffect(() => {
    const receiveMessage = (message: MessageType) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
  };
    socket.on('receive_message', receiveMessage);
    return () => {
      socket.off('receive_message', receiveMessage);
  };
  }, [socket]);
  useEffect(() => {
    if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
}, [messages]); // Depend on messages

  return (

    <div className={`max-h-[70vh] flex-1 overflow-y-auto `} >
  { messages?.length>0 && messages?.map((message:any,key:any) => (
    <div key={key} ref={messages[messages.length - 1] === message ? lastMessageRef : null} >
        <OneMessage  message={message} />
  </div>
    ))
  }
  </div>
  )
}
