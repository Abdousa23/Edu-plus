'use client'
import React from 'react'
import Sidebar from '../_components/Sidebar'
import SideBarMessages from './_components/SideBarMessages'
import ChatBox from './_components/ChatBox'
import { Toaster } from 'react-hot-toast'

export default function page() {
  
  return (
    <div className='flex gap-4 justify-between'>
        <Sidebar/> 
        <SideBarMessages />
        <ChatBox/>
        <Toaster />
        
    </div>
  )
}
