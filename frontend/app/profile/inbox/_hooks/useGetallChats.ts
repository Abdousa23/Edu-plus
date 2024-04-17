import React, { useEffect,useState } from 'react'
import toast from 'react-hot-toast'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'


export default function useGetallChats() {

    const [loading, setLoading] = useState(false)
    const [chats,setChats]=useState<ChatType[]>([])
    const fetchPrivate = useFetchPrivate()

    useEffect(()=>{
    
    const getallchats = async ()=>{
        try {
            setLoading(true)
            const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat/allchats`, {
                method: 'GET',
            });
            if (!res.ok) {
                throw new Error('Failed to fetch chats')
            }
            const data = await res.json()
            setChats(data.chats)
            setLoading(false)
        } catch (error) {
            toast.error('Failed to fetch chats')
            setLoading(false)
        }
    }

    getallchats()}
,[])

return {loading,chats}

}






