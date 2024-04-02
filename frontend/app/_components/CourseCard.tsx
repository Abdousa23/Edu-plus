import React from 'react'
import Link from 'next/link'

export default function CourseCard() {
  return (
     <div className='w-[325px] h-[420px] m-2 shadow-md rounded-lg order-0 '>
    
        <img src="/images/landing.svg" className='w-full h-2/5 ' alt="" />
    
    <div className='p-4 w-full h-3/5 flex flex-col items-stretch justify-evenly'>
        <p className='font-regular text-sm text-[#777795]'>date</p>
        <h1 className='font-extrabold text-2xl'>Course Title</h1>
        <p className='font-regular text-base text-[#4d4d4d]'>Course description</p>
        <div className='flex justify-between'>
           <p className='font-semibold'>price</p>
            <div>
            <Link href={'/'}  className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 border border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>show details</Link>
            </div>
        </div>
    </div>
</div>
  )
}
