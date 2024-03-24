'use client'
import useAuth from './useAuth'
const useRefreshToken= () => {
    const {auth,setAuth} =useAuth()
    const Refresh = async ()=>{
        const token = localStorage.getItem('accessToken')
        console.log(token)
        console.log(auth)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token || ''
            
        },
            credentials:'include'
        })
        if (!response.ok) {
            console.log("error")
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        console.log("ssss")
        console.log(data)
        setAuth(data)
        // localStorage.setItem('accessToken',data.accessToken)
        return data.accessToken;
    }
    return Refresh
}

export default useRefreshToken