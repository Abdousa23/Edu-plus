'use client'
import { headers } from 'next/headers'
import  useAuth  from './useAuth'

const useRefreshToken= () => {
    const {setAuth} =useAuth()
    const Refresh = async ()=>{
        const token = localStorage.getItem('accessToken')
        console.log(token)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`,
        
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token || ''
            
        },
            credentials:'include'
        })
        const data = await response.json()
        console.log("ssss")
        setAuth((prev:any) =>{
            console.log(JSON.stringify(prev))
            console.log("ggg")
            console.log(data)
            return {...prev,accessToken:data.accessToken}
        })
    }
    return Refresh
}

export default useRefreshToken