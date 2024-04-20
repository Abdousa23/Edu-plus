import useFetchPrivate from "@/app/_hooks/useFetchPrivate"
export const getCourses = async (endpoint:string) => {
    const fetchPrivate = useFetchPrivate()
    const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,{
        method: 'GET'
    
    })
    const data = await response?.json()
    if(!response?.ok){
        return {data:null, error: data.message}
    }else{
        return {data:data, error: null}
    }
}