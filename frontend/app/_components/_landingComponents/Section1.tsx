import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Section1() {
  return (
    <header className='container mx-auto mt-16 flex max-md:flex-col justify-between'>
        <section className='flex flex-col w-[49%]  max-md:w-[100%] mx-auto mt-8 '>
            <p className=' font-semibold text-lg mx-4 text-neworg my-4 max-md:hidden'>Do you want to feed your brain with all kinds of good things ?!</p>
            <h1 className='font-bold text-6xl max-sm:text-center mx-4 my-4 '>Learn new things, improve your skills just in one click</h1>
            <p className='font-medium text-[22] mx-4 my-4 text-[#989898] max-md:hidden'>Edu + is a platform that offers you online or ofline courses in different fields and from different schools, there is something for everyone , make your choice and embark on a new adventure </p>
            <button className='flex flex-row justify-center my-4 items-center mx-1 max-md:hidden px-4 py-2 w-[100%] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-neworg border-2 border-neworg rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Learn more <PlayArrowIcon /> </button>
            <div className='max-md:flex flex-col justify-between items-center hidden'>
                <Link href='/auth/register' className='flex flex-row justify-center items-center mx-auto px-4 py-2 w-[100%] max-sm:w-[90%] max-sm:h-8 max-sm:text-sm h-11 border border-green+ rounded-lg order-5 self-stretch flex-grow-0 text-base text-green+'>Register</Link>
                <Link href='/auth/login' className='flex flex-row justify-center items-center mx-auto px-4 py-2 w-[100%] mt-2 max-sm:w-[90%] max-sm:h-8 max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Login</Link>
            </div>
        </section>
        <section className='flex justify-end w-[49%] max-md:hidden mx-auto  '>
            <img src="/images/landing.svg" className='max-w-full' alt="" />
        </section>
    </header>
  )
}
