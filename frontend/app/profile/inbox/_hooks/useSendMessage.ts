import React from 'react'
import { useState } from 'react'
import useChat from '../zustand/useChat'
import { toast } from 'react-hot-toast'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
import { headers } from 'next/headers'



export const useSendMessage =()=> {
const [loading, setLoading] = useState(false)
const {selectedChat , messages, setMessages} = useChat()
const fetchPrivate = useFetchPrivate()

const  sendMessage  = async (message:any) => {

try {
    setLoading(true)
    const res= await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/chat/send/${selectedChat?._id}`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    })
    // i didnt speided the data type because im supposed to get the message well formatted from the server
    const data  = await res?.json()
    if(data.error) throw new Error(data.error)
    setMessages([...messages, data.message])
    setLoading(false)

} catch (error:any) {
    console.log("errore in the use send meessage hook ")
    toast.error(error.message)
}

}
return {loading , sendMessage, messages,setMessages}
}

