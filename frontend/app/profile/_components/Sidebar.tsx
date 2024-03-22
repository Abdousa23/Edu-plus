import useAuth from '@/app/_hooks/useAuth'
import React, { useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import useLogout from '@/app/_hooks/useLogout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Sidebar() {
    const {auth} = useAuth()
    const logout = useLogout()
    const router = useRouter()
    const user = auth?.user
    const ROLES = {
        "Admin": 5150,
        "Editor": 5100,
        "User": 2000,
        "School" : 3000,
      }
      const signout = async () => {
        await logout();
        router.replace('/auth/login')
    }
  return (
    <div className=' justify-around sticky  flex flex-col items-center px-4 py-8  w-1/4 h-[100vh] top-0 left-0 bg-white shadow-md rounded-l-[20px]'>
        <div className='flex justify-between flex-col h-[45%] w-full'>
        <div className='w-28 max-md:w-16 mx-auto mb-4'>
            <img src={user?.pfp} className='max-w-full' alt="" />
            <h2 className=' font-normal text-xl'>John Doe</h2>
        </div>
        <div className='mx-auto'>
            <h1 className='font-semibold text-center text-base'>Account</h1>
            <ul className='text-base font-medium mt-8'>
               {
                user?.roles &&( Object.values(user?.roles as number[])[0] === ROLES.User ?
                <ul className='flex flex-col'>
                <Link href={'/profile/settings'} className='px-4 py-2'> <HomeIcon /> <span className=' max-md:hidden'>account Settings</span></Link>
                <Link href={'/profile/inbox'} className='px-4 py-2'> <MailIcon /> <span className=' max-md:hidden'>inbox</span></Link>
                <Link href={'/profile/courses'} className='px-4 py-2'> <FolderIcon /> <span className=' max-md:hidden'>Courses</span></Link>
                <Link href={'/profile/'} className='px-4 py-2'> <FavoriteBorderIcon /> <span className=' max-md:hidden'>wishlist</span></Link>
                </ul>
                :
                Object.values(user?.roles as number[])[0] === ROLES.School &&
                <ul className='flex flex-col'>
                <Link href={'/profile'}> <Person2OutlinedIcon/> <span className=' max-md:hidden'>profile</span></Link>
                <Link href={'/profile/dashboard'}><BarChartIcon/> <span className=' max-md:hidden'>dashbord</span></Link>
                <Link href={'/profile/addCourse'}> <AddCircleOutlineIcon /> <span className=' max-md:hidden'>create new course</span></Link>
                <Link href={'/profile/publishedCourses'}> <FolderIcon/> <span className=' max-md:hidden'>published courses</span></Link>
                <Link href={'/profile/settings'}> <SettingsOutlinedIcon/>  <span className=' max-md:hidden'>settings</span></Link>

                </ul>
                )
                }
            </ul>
        </div>
        </div>
        <button onClick={signout} className='font-medium text-base text-[#ff0000]'>
            <LogoutIcon />
            <span className=' max-md:hidden'>Logout</span>
        </button>
    </div>
  )
}
