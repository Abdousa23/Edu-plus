'use client'
import React from 'react'
import Sidebar from '../_components/Sidebar'
import SideBarMessages from './_components/SideBarMessages'
import ChatBox from './_components/ChatBox'

import { Toaster } from 'react-hot-toast'
import Navbar from '@/app/_components/Navbar'

export default function page() {
  
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <div className='flex'>
        
        <Sidebar />
        <SideBarMessages/>
        <ChatBox/>
        <Toaster />
        
    </div>
  </div>)
}
