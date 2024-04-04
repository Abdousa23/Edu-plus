
export const getUserCourses = async (userid: string, error: ErrorProps, setError: any) => {
    try {
        console.log(userid)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/instructor/courses/${userid}`)

        const data = await response.json()
        console.log(data)
        if (!response.ok) {
            throw new Error(data.message)
        }
        return data
    } catch (error: any) {
        setError({ errmessage: error.message })
    }
}