import React from 'react'
import Dashboard from './_admincomponents/Dashboard'
import Navbar from '../../_components/Navbar'
import Sidebar from '../_components/Sidebar'

export default function AdminDashboard() {
  return (
    <div className='flex bg-[#FAFBFC] w-full box-border'>
      <Sidebar />
      <div className='flex-grow bg-[#FAFBFC]  box-border w-3/4 '>
        <div className='flex-grow'>
          <div className=' text-[#1d2026]  '>
            <Navbar />
            <Dashboard />
          </div>
          </div>
          </div>
        </div>
        )
}
