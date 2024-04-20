'use client'
import React from 'react'
import Sidebar from './_components/Sidebar'
import withAuth from '../_HOC/withAuth'

const page = ()=> {
  return (
    <div className='flex bg-[#E9EAF0] w-full box-border'>
      <Sidebar />
      my profile
    </div>
  )
}

export default withAuth(page)