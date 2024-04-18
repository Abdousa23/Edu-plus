export const getUserData = async (userid : string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/${userid}`)
    const data = await response.json()
    if(!response.ok){
        return {data:null, error: data.message}
    }
    return {data:data, error: null}
}
