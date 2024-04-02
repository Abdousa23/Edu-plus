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
           <div class='flex justify-center items-center max-sm:hidde'>
            <div class="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-gray-100 overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>

            <input class="flex flex-row items-center px-5 space-x-4.5 w-76 h-10 bg-gray-100 " type="text"id="search"  placeholder="Search Anything.." /> 
            </div>
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
                <Link href='/auth/register' className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 border border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>Register</Link>
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
                        <img src={auth?.user?.pfp || ''} className='max-w-full w-10' alt="" />
                        </Link>
                    </div>
            }
        </nav>

    </header>
)
}
