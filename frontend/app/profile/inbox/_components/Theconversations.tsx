import React from 'react'
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

  return (

    <div className={`h-[82vh] overflow-auto `} >
  {messages.map((info:messageProps,key) => (
  <OneMessage key={key}  _id={info._id} message={info.message} sender={info.sender} createdAt={info.createdAt} senderphp={info.senderphp}/>
    ))
  }
  </div>
  )
}
