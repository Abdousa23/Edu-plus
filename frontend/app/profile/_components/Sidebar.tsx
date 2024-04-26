'use client'
import useAuth from '@/app/_hooks/useAuth'
import React, { useEffect,useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import useLogout from '@/app/_hooks/useLogout';
import { useRouter , usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
    const {auth} = useAuth()
    const logout = useLogout()
    const router = useRouter()
    const pathname = usePathname()
    const [user,setUser] = useState<userType>(auth?.user)
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
    useEffect(() => {
      setUser(auth?.user)
      // console.log(Object.values(user?.roles as number[])[0] )
      console.log(ROLES.Admin)
    }, [auth])
  return (
    <div className=' justify-around sticky  flex flex-col items-center px-4 py-8  w-1/4 h-[100vh] top-0 left-0 bg-white shadow-md rounded-l-[20px]'>
        <div className='flex justify-between flex-col h-[45%] w-full'>
        <div className='w-28 max-md:w-16 mx-auto mb-4'>
            <img src={user?.pfp.url} className='max-w-full rounded-full' alt="" />
            <h2 className=' font-normal text-xl text-center'>{user?.username}</h2>
        </div>
        <div className='mx-auto'>
            <h1 className='font-semibold text-center text-base'>Account</h1>
            <ul className='text-base font-medium mt-8'>
               {
                user?.roles && Object.values(user?.roles as number[])[0] === ROLES.Admin ?
                <ul className='flex flex-col'>
                {/* <Link href={'/profile'} className={`px-4 py-2 ${pathname === '/profile' ? ' text-green+' : 'text-black'} `}> <Person2OutlinedIcon/> <span className={` max-md:hidden ${pathname === '/profile/settings' ? 'text-green+' : 'text-black'}`}>profile</span></Link> */}
                <Link href={'/profile/dashboard'} className={`px-4 py-2 ${pathname === '/profile/dashboard' ? ' text-green+' : 'text-black'} `}><LeaderboardIcon /> <span className=' max-md:hidden'>dashbord</span></Link>
                <Link href={'/profile/admin/students'} className={`px-4 py-2 ${pathname === '/profile/admin/students' ? ' text-green+' : 'text-black'} `}>  <span className=' max-md:hidden'>students</span></Link>
                <Link href={'/profile/admin/teachers'} className={`px-4 py-2 ${pathname === '/profile/admin/teachers' ? ' text-green+' : 'text-black'} `}> <span className=' max-md:hidden'>teachers</span></Link>
                <Link href={'/profile/admin/courses'} className={`px-4 py-2 ${pathname === '/profile/admin/courses' ? ' text-green+' : 'text-black'} `}>   <span className=' max-md:hidden'>courses</span></Link>
                <Link href={'/profile/settings'} className={`px-4 py-2 ${pathname === '/profile/settings' ? ' text-green+' : 'text-black'} `}> <SettingsOutlinedIcon/>  <span className=' max-md:hidden'>settings</span></Link>
                </ul>
                :
                user?.roles && Object.values(user?.roles as number[])[0] === ROLES.School ?
                <ul className='flex flex-col'>
                <Link href={'/profile'} className={`px-4 py-2 ${pathname === '/profile' ? ' text-green+' : 'text-black'} `}> <Person2OutlinedIcon/> <span className={` max-md:hidden ${pathname === '/profile/settings' ? 'text-green+' : 'text-black'}`}>profile</span></Link>
                <Link href={'/profile/dashboard'} className={`px-4 py-2 ${pathname === '/profile/dashboard' ? ' text-green+' : 'text-black'} `}><LeaderboardIcon /> <span className=' max-md:hidden'>dashbord</span></Link>
                <Link href={'/profile/addCourse'} className={`px-4 py-2 ${pathname === '/profile/addCourse' ? ' text-green+' : 'text-black'} `}> <AddCircleOutlineIcon /> <span className=' max-md:hidden'>create new course</span></Link>
                <Link href={'/profile/publishedCourses'} className={`px-4 py-2 ${pathname === '/profile/publishedCourses' ? ' text-green+' : 'text-black'} `}> <FolderIcon/> <span className=' max-md:hidden'>published courses</span></Link>
                <Link href={'/profile/settings'} className={`px-4 py-2 ${pathname === '/profile/settings' ? ' text-green+' : 'text-black'} `}> <SettingsOutlinedIcon/>  <span className=' max-md:hidden'>settings</span></Link>

                </ul>
                :
                user?.roles &&( Object.values(user?.roles as number[])[0] === ROLES.User &&
                <ul className='flex flex-col'>
                <Link href={'/profile/settings'} className={`px-4 py-2 ${pathname === '/profile/settings' ? ' text-green+' : 'text-black'} `}> <HomeIcon /> <span className=' max-md:hidden'>account Settings</span></Link>
                <Link href={'/profile/inbox'} className={`px-4 py-2 ${pathname === '/profile/inbox' ? ' text-green+' : 'text-black'} `}> <MailIcon /> <span className=' max-md:hidden'>inbox</span></Link>
                <Link href={'/profile/courses'}className={`px-4 py-2 ${pathname === '/profile/courses' ? ' text-green+' : 'text-black'} `}> <FolderIcon /> <span className=' max-md:hidden'>Courses</span></Link>
                <Link href={'/profile/'} className={`px-4 py-2 ${pathname === '/profile/' ? ' text-green+' : 'text-black'} `}> <FavoriteBorderIcon /> <span className=' max-md:hidden'>wishlist</span></Link>
                <Link href={'/profile/cart'} className={`px-4 py-2 ${pathname === '/profile/cart' ? ' text-green+' : 'text-black'} `}> <ShoppingCartOutlinedIcon /> <span className=' max-md:hidden'>Cart</span></Link>
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
