import React from 'react'
import Image from 'next/image';
import useAuth from '@/app/_hooks/useAuth';
import {extractTime} from'../util/formatTime'

type messageProps={
    _id: string;
    sender: string;
    message: string;
    createdAt: string; 
    senderphp: string;   
    }

export default function TheMessage(info: messageProps) {

const formattedTime = extractTime(info.createdAt);

const {auth}= useAuth()
const user:userType=auth?.user
const fromMe = user?.username===info.sender;
const chatClassName = fromMe ? "chat-end" : "chat-start";

console.log()

    return (
        <div className={`chat ${chatClassName} m-5`} >
            <div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
                <img src={info.senderphp} alt="php pic"  className='chat-image avatar'/>
				</div>
			</div>
            
            
            
            <div>
            <div className="" > {info.sender} </div>
            <div className={`chat-bubble text-black ${user?.username===info.sender?'bg-[#C4E7E1]':' bg-slate-200 pb-2'}  rounded-xl px-2 px-auto   `} > {info.message} </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
            </div>
        </div>
    )
    }
    