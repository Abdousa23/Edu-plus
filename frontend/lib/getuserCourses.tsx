
export const getUserCourses = async (userid: string) => {
    try {
        console.log("userid")
        console.log(userid)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/instructor/courses/${userid}`)

        const data = await response.json()
        console.log(response.ok)
        console.log(data)
        if (!response.ok ) {
            throw new Error(data.message)
        }
        return { error: null, data: data}
    } catch (error: any) {
        return { error: error.message, data: null}
    }
}