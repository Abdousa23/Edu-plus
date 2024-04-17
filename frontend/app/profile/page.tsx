'use client'
import React from 'react'
import Sidebar from './_components/Sidebar'
import withAuth from '../_HOC/withAuth'

const page = ()=> {
  return (
    <div className='h-[10000px] flex bg-[#E9EAF0]'>
      <Sidebar />
      my profile
    </div>
  )
}

export default withAuth(page)