import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
import useAuth from '@/app/_hooks/useAuth'





export const UseGetTopCreators =   () => {
    const fetchPrivate = useFetchPrivate()
    const [topCreators, setTopCreators] = useState<any>([])
    const {auth} = useAuth()



    const getTopCreators = async () => {
        try {
            const res= await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/topcreators`, { method: 'GET' });
            const data = await res?.json();
            setTopCreators(data);
            console.log('data in gettting the admin top creators ', data);
    } catch (error) {
        console.log("errore in useGet top creators")
        console.log(error)
    }}



    useEffect(() => {
        getTopCreators()
    }
    , [])
    return (topCreators)
}
