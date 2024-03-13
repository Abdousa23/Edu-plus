import useAuth from "./useAuth";

export default function useLogout() {
  const {setAuth} = useAuth()
  const logout = async()=>{
    setAuth({})
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`,{
            credentials: 'include',
        })
        localStorage.removeItem('accessToken')
    } catch (error:any) {
        console.log(error.message)
    }
  }
  
    return logout
}
