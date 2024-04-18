import React, { use } from 'react'
import { useState , useEffect } from 'react'
import useChat from '../zustand/useChat'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
export const useGetMessages = () => {
const [loading, setLoading] = useState<boolean>(true)
const {selectedChat , messages , setMessages } = useChat()
const fetchPrivate = useFetchPrivate()


useEffect(  () => {

const getMessages = async () => {
try {
    setLoading(false)
    console.log('selectedChat id ', selectedChat?._id)
    const res= await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/chat/${selectedChat?._id}`, {
        method:'GET',
    })

    if (!res?.ok) {
        throw new Error('Failed to fetch messages')
    }
    const data = await res.json()
    console.log('data in the getMessages hook ', data)
    setMessages(data.messages)
} catch (error) {
    console.log('error in the getting messages getMessages hook ', error)
    
}}


getMessages()



}, [selectedChat ])
return {loading , messages}
}

