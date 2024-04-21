import React from 'react'
import Totalsales from './Totalsales'
import TopCreators from './TopCreators'
import NewUsersPerMonth from './newUsersPermonth'
import TopCategories from './TopCategories'



export default function Dashboard() {
  return (
    <div className='flex flex-col w-full  '>
     
      <Totalsales />      
       <div>
      <TopCreators />
      <TopCategories />
      </div>
      <NewUsersPerMonth />
    </div>
  )
}