'use client'
import Navbar from '../../_components/Navbar'
import ProfileHeader from '../_components/ProfileHeader'
import Footer from '../../_components/Footer'
import ProfileContent from '../_components/ProfileContent'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getUserCourses } from '@/lib/getuserCourses'
import { getUserData } from '@/lib/getUserData'
export default function Page() {
    const [user, setUser] = useState<userType | null>(null)
    const [courses, setCourses] = useState<CourseType[]>([])
    const [error, setError] = useState<ErrorProps>({errmessage:''})
    const {userid} = useParams()
    let stringuserid = Array.isArray(userid) ? userid.join('') : userid;
    useEffect(() => {
        const fetchUser = async (id:string) => {
            const data = await getUserCourses(id)
            // console.log("ss")
            if (data.data) {
                console.log(data.data.courses)
                setCourses(data.data.courses)
                setUser(data.data.user)
            }else if(data.error){
                setError(data.error)
            }
        }
        fetchUser(stringuserid)
        console.log("ss")
    }, [])
return (
    <div>
        <Navbar/>
        <div className='container mx-auto'>
        <ProfileHeader courses={courses} user={user} />
        </div>
        <div className="container mx-auto flex gap-5">

        <aside className=' border-r-2 py-8 h-fit  w-1/4'>
            <h1 className=' font-medium text-base'>ABOUT ME</h1>
            <p className='font-normal text-sm text-[#6e7485]'>
                bio
            </p>
        </aside>
        <ProfileContent courses={courses} user={user} error={error} />
        </div>
        <Footer />
    </div>
    
    )
}
