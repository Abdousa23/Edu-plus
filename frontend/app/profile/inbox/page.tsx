'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../_components/Sidebar'
import SideBarMessages from './_components/SideBarMessages'
import ChatBox from './_components/ChatBox'

import { Toaster } from 'react-hot-toast'
import Navbar from '@/app/_components/Navbar'

export default function page() {

  return (
    <div className='flex bg-[#E9EAF0] w-full box-border'>
      <Sidebar />
      <div className='flex-grow  box-border w-3/4 '>
        <div className='flex-grow'>
          <div className=' text-[#1d2026]  '>
            <Navbar />
            <div className=' container flex max-md:flex-col  justify-center md:gap-5 h-[89vh] '>
              <SideBarMessages />
              <ChatBox />
            </div>
            <Toaster />

          </div>
        </div>
      </div>
  </div >)
}
