import React from 'react'
import Dashboard from './_admincomponents/Dashboard'
import Navbar from '../../_components/Navbar'
import Sidebar from '../_components/Sidebar'

export default function AdminDashboard() {
  return (
    <div className=' '>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <Dashboard/>
      </div>
    </div>
  )
}
