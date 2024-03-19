'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image'
import useAuth from '../_hooks/useAuth';
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar() {
    const {auth} =useAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=>{
        if(auth?.user){
            setIsAuthenticated(true)
        }else{
            setIsAuthenticated(false)
        }
    },[auth])
    return (
    <header className='container mx-auto '>

        <nav className=' flex items-center justify-around mt-16'>

            <Link href="/" className=''>
            
            <Image
            src="/edulogo.svg"
            alt="logo image"
            width={100}
            height={20}
            className=""
            />

            </Link> 
            <div className='flex justify-center items-center max-sm:hidden'>
            <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <input type="text" id='search' className="flex flex-row items-center px-5 space-x-4.5 w-76 h-10 bg-gray-100 rounded-full" placeholder="Search Anything" />
            </div>
            <Link href="/" className='max-md:hidden max'>
                Home
            </Link>
            <Link href="categories" className='max-md:hidden'>
            Categories
            </Link>
            <Link href="/AboutUs" className='max-md:hidden'>
            About Us
            </Link>
            {
                !isAuthenticated 
                ? <div className='flex justify-between items-center'>
                <Link href='/auth/register' className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 border-2 border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>Register</Link>
                <Link href='/auth/login' className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Login</Link>
                <div>
                <LanguageIcon className='text-green+' />
                </div>
            
                </div>
                : <div className='flex justify-between'>
                    <div className='mx-4'>
                        <Link href={'home/cart'}>
                        <ShoppingCartOutlinedIcon />
                        </Link>
                    </div>
                    <div className='mx-4'>
                        <Link href={'home/wishlist'}>
                        <NotificationsNoneOutlinedIcon />
                        </Link>
                        
                    </div>
                    <div className='mx-4'>
                        <Link href={'home/favourites'}>
                        <FavoriteBorderIcon />
                        </Link>
                    </div>
                        <Link href={'/profile'}>
                        <img src={auth?.user.pfp} className='max-w-full w-10' alt="" />
                        </Link>
                    </div>
            }
        </nav>

    </header>
)
}