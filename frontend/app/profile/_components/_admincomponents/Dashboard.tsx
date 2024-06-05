import React from 'react'
import Totalsales from './Totalsales'
import TopCreators from './TopCreators'
import NewUsersPerMonth from './newUsersPermonth'
import TopCategories from './TopCategories'



export default function Dashboard() {
  const sampleUserData = {
    January: { type1: 100, type2: 150 },
    February: { type1: 120, type2: 160 },
    March: { type1: 130, type2: 170 },
    April: { type1: 140, type2: 180 },
    May: { type1: 110, type2: 155 },
    June: { type1: 125, type2: 165 },
    July: { type1: 135, type2: 175 },
    August: { type1: 145, type2: 185 },
    September: { type1: 105, type2: 145 },
    October: { type1: 115, type2: 155 },
    November: { type1: 125, type2: 165 },
    December: { type1: 135, type2: 175 }
  };

  return (
    <div className='flex flex-col w-full'>

      <Totalsales />
      <div className='gap-[8vh] md:flex flex-row m-5 mx-[2vh]'>
        <TopCreators />
        <TopCategories />
      </div>
      <div className='w-[50vw]  flex justify-center items-center' >
        <NewUsersPerMonth userData={sampleUserData} />
      </div>
    </div>
  )
}