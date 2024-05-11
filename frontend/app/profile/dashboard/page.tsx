 'use client'
 import withAuth from '@/app/_HOC/withAuth'
 import useAuth from '@/app/_hooks/useAuth'
 import React, { useEffect } from 'react'
 import TeacherDashboard from '../_components/TeacherDashboard'
 import AdminDashboard from '../_components/AdminDashboard'
 const Dashboard = ()=> {
     const {auth} = useAuth()
     useEffect(()=>{
         console.log(auth?.user.roles.School)
     },[auth])
   return (
     <div>
       {
         auth?.user?.roles?.School === 3000 ? <TeacherDashboard />
         : auth?.user?.roles?.Admin === 5150 ? <AdminDashboard />
         : <h1>you are not authorized to access this Page</h1>
       }
     </div>
   )
 }

 export default withAuth(Dashboard)
