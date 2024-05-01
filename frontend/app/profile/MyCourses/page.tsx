'use client'
import React, { useState } from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import WelcomHeader from './_components/WelcomHeader'
import router from 'next/router'
import Search from './_components/Search'

const page = () => {

    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container mx-auto'>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  grid grid-flow-dense my-2'>
                        <Navbar />
                        <WelcomHeader/>
                        <Search/>
                        

                    </div>
                </div>
            </div>
        </div>

    )
}
export default page