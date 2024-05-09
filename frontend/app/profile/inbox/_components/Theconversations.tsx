import React from 'react'
import { useRef , useEffect } from 'react'
import {useGetMessages} from '../_hooks/useGetMessages'
import OneMessage from './OneMessage'
import useAuth from '@/app/_hooks/useAuth'
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
  const user:userType = auth?.user
  const {messages} = useGetMessages()


  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }, [messages]);





  return (

    <div className={`h-[82vh] overflow-y-auto scro `} >
  {messages.map((info:messageProps,key) => (
    <div key={key} ref={lastMessageRef} >
        <OneMessage  _id={info._id} message={info.message} sender={info.sender} createdAt={info.createdAt} senderphp={info.senderphp}/>
  </div>
    ))
  }
  </div>
  )
}
