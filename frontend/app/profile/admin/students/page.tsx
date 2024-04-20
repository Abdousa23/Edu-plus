'use client'
import React from 'react'
import Sidebar from '../../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import UserCard from '../_components/UserCard'
import UserContent from '../_components/UsersContent'
export default function page() {
    return (
        <div className='flex bg-[#E9EAF0] w-full box-border'>
            <Sidebar />
            <div className='flex-grow  box-border w-3/4 '>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  '>
                        <Navbar />
                        <UserContent type='student' />
                    </div>
                </div>
            </div>
        </div>
    )
}
