'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image'
import useAuth from '../_hooks/useAuth';
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useLogout from '../_hooks/useLogout';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const { auth } = useAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selected, setSelected] = useState(false);
    const [search, setSearch] = useState('' as string);
    const user = auth?.user
    const logout = useLogout();
    const router = useRouter()
    const signout = async () => {
        await logout();
        router.replace('/auth/login')
    }
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/search/${search}`)
        const data = await response.json();
        router.push(`/home/${search}`)
    }
    useEffect(() => {
        if (auth?.accessToken) {
            setIsAuthenticated(true)
        } else {
                setIsAuthenticated(false)
        }
    }, [auth])
    return (
        <>
            <header className='container  py-2 mx-auto '>

                <nav className=' flex items-center justify-around mt-8'>

                    <Link href={isAuthenticated?'/home':'/'} className=''>

                        <Image
                            src="/edulogo.svg"
                            alt="logo image"
                            width={100}
                            height={20}
                            className=""
                        />

                    </Link>
                    <form method='POST' onSubmit={handleSearchSubmit} className='flex justify-center items-center max-sm:hidden'>
                        <label htmlFor="search">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <input type="text" id='search' value={search} onChange={handleSearchChange} className="flex flex-row items-center px-5 space-x-4.5 w-76 h-10 bg-gray-100 rounded-full" placeholder="Search Anything" />
                    </form>
                    <Link href="/" className='max-md:hidden max'>
                        Home
                    </Link>
                    <Link href="categories" className='max-md:hidden'>
                        Categories
                    </Link>

                    { !isAuthenticated
                            ? <div className='flex justify-between items-center'>
                                <Link href='/auth/register' className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 border border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>Register</Link>
                                <Link href='/auth/login' className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Login</Link>
                                <div>
                                    <LanguageIcon className='text-green+' />
                                </div>

                            </div>
                            : <div className='flex justify-between items-center'>
                                <div className='mx-4'>
                                    <Link href={'./profile/cart'}>
                                        <ShoppingCartOutlinedIcon />
                                    </Link>
                                </div>
                                <div className='mx-4'>
                                    <Link href={'./profile/notification'}>
                                        <NotificationsNoneOutlinedIcon />
                                    </Link>

                                </div>
                                <div className='mx-4'>
                                    <Link href={'./profile/inbox'}>
                                        <MailIcon />
                                    </Link>
                                </div>
                                <div className='relative' onClick={(e)=>setSelected(!selected)}>
                                    <img src={auth?.user?.pfp.url || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'} className='max-w-full w-10 rounded-full' alt="" />
                                
                                { selected && <ul className=' absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 divide-y divide-gray-100'>
                                    <li className='px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'>
                                        {<p>sign in as <span className='font-semibold'>{user?.username || 'guest'}</span></p>}
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2'>
                                    <Link href={'/profile'} className='w-full'>
                                    <AccountCircleIcon className='mr-4' />
                                    my profile
                                    </Link>
                                    </li>
                                    <li className='px-4 py-2 text-gray-800'>
                                    <Link href={'/profile/settings'}  className='w-full'>
                                    <SettingsIcon className='mr-4' />
                                    settings
                                    </Link>
                                    </li>
                                    <li className='px-4 py-2 text-gray-800'>
                                    <Link href={'/support'}  className='w-full'>
                                    <HelpIcon className='mr-4' />
                                    help & support
                                    </Link>
                                    </li>
                                    <li className='px-4 py-2 text-gray-800'>
                                    <button onClick={signout}  className='flex w-full'>
                                        <LogoutIcon className='mr-4' />    
                                        logout
                                    </button>
                                    </li>
                                </ul>}
                                </div>
                            </div>
                    }
                </nav>

            </header>

        </>
    )
}
