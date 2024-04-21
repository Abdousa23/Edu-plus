'use client'
import React from 'react'
import Sidebar from '../../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import UserCard from '../_components/UserCard'
import UserContent from '../_components/UsersContent'
export default function page() {
    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container mx-auto'>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  '>
                        <Navbar />
                        <h1 className=' bold text-2xl ml-8 my-8 '>Learners</h1>
                        <div className='flex justify-between w-[90%] mx-auto my-5'>
                            <div className='flex items-center gap-11'>
                                <p className='font-semibold text-sm text-org'>selected</p>
                                <button className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-green+ border-2 border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>delete selected</button>
                            </div>
                            <div>
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <UserContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
