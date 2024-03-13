import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

export default function HeroInstucter() {
  return (
    <div className='flex justify-around  items-center m-10 '>
      <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-6xl'>Become an Instructor</h1>
        <br/>
        <p className='text-3xl '>Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.s</p>
        <button className="btn bg-[#F48914] w-[25vh] my-10 ">GET STARTED</button>
        
      </div>
      <div >
        <Image width={850} height={250} src="/heropic.png" alt='hero pic' >

        </Image>
      </div>
    </div>
  )
}
