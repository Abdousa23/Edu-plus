'use client'
import React, { useState } from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import WelcomHeader from './_components/WelcomHeader'
import router from 'next/router'
import Search from './_components/Search'

const page = () => {

    return (
        <div className='flex bg-[#E9EAF0] w-full box-border'>
            <Sidebar />
            <div className='flex-grow  box-border w-3/4 '>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  '>
                        <Navbar />
                        <WelcomHeader />
                        <Search />


                    </div>
                </div>
            </div>
        </div>

    )
}
export default page