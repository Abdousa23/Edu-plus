'use client'
import Navbar from '../../_components/Navbar'
import ProfileHeader from '../_components/ProfileHeader'
import Footer from '../../_components/Footer'
import ProfileContent from '../_components/ProfileContent'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
export default function Page() {
    const [user, setUser] = useState<userType | null>(null)
    const {userid} = useParams()
    const getUserData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/${userid}`)
        const data = await response.json()
        setUser(data)
        console.log(data)
    }
    useEffect(() => {
        getUserData()
    }, [])
return (
    <div>
        <Navbar/>
        <div className='container mx-auto'>
        <ProfileHeader user={user} />
        </div>
        <div className="container mx-auto flex gap-5">

        <aside className=' border-r-2 py-8 h-fit  w-1/4'>
            <h1 className=' font-medium text-base'>ABOUT ME</h1>
            <p className='font-normal text-sm text-[#6e7485]'>
                bio
            </p>
        </aside>
        <ProfileContent user={user} />
        </div>
        <Footer />
    </div>
    
    )
}
