import React from 'react'
import useAuth from '@/app/_hooks/useAuth';
import { extractTime } from '../util/formatTime'

type messageProps = {
    message: {
        _id: string;
        sender: any;
        text: string;
        createdAt: string;
        senderphp: string;
    }
}

export default function OneMessage({ message }: messageProps) {

    const formattedTime = extractTime(message.createdAt);

    const { auth } = useAuth()
    const user: userType = auth?.user
    
    return (
        <div className='flex flex-col overflow-x-hidden max-w-[80%]'>
            <div className={`flex items-center gap-1 my-1 mx-5`} >
                {
                    message && message?.sender?.username === user?.username ?
                        <div></div>
                        :
                        <div>
                            <div className='w-10 h-10'>
                                <img src={message?.sender?.pfp.url} alt="php pic" className='max-w-full rounded-full' />
                            </div>
                            <div className="" > {message?.sender?.username} </div>
                        </div>
                }

            </div>
            <div className={"px-5 w-fit   text-wrap " + `${message?.sender?.username === user?.username ?"self-end":" "} `}>
                <p className={` text-black  text-wrap ${user?.username === message?.sender?.username ? 'bg-[#C4E7E1]' : ' bg-slate-200 pb-2'}   px-2 px-auto   `} > {message.text} </p>
                <div className='opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
            </div>
        </div>
    )
}
