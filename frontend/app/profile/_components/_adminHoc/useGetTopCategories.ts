import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
import useAuth from '@/app/_hooks/useAuth'


export const UseGetTopCategories =   () => {
    const fetchprivet = useFetchPrivate()
    const [topCat, setTopCat] = useState<any>([])
    const {auth} = useAuth()



    const getTopCreators = async () => {
        try {
            const res= await fetchprivet(`${process.env.NEXT_PUBLIC_API_URL}/admin/topcategories`, { method: 'GET' });
            const data = await res?.json();
            setTopCat(data);
            console.log('data in gettting the admin top categoreis ', data);
    } catch (error) {
        console.log("errore in useGet top categories hoc ")
        console.log(error)
    }}  

     
    



    useEffect(() => {
        getTopCreators()
    }
    , [])
    return (topCat)
}
