import React from 'react'
import Image from 'next/image'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Section1() {
  return (
    <header className='container mx-auto mt-16 flex max-md:flex-col justify-between'>
        <section className='flex flex-col w-[49%] max-md:w-[90%] mx-auto mt-8 '>
            <p className=' font-semibold text-lg text-neworg my-4 max-md:hidden'>Do you want to feed your brain with all kinds of good things ?!</p>
            <h1 className='font-bold text-6xl my-4 '>Learn new things, improve your skills just in one click</h1>
            <p className='font-medium text-[22] my-4 text-[#989898] max-md:hidden'>Edu + is a platform that offers you online or ofline courses in different fields and from different schools, there is something for everyone , make your choice and embark on a new adventure </p>
            <button className='flex flex-row justify-center my-4 items-center mx-1 max-md:hidden px-4 py-2 w-[226px] max-sm:w-16 max-sm:h-8 max-sm:text-sm h-11 bg-neworg border-2 border-neworg rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Learn more <PlayArrowIcon /> </button>
        </section>
        <section className='flex justify-end w-[49%] max-md:w-[90%] mx-auto  '>
            <img src="/images/landing.svg" className='max-w-full' alt="" />
        </section>
    </header>
  )
}
