import React from 'react'

export default function Section2() {
  return (
    <section className='bg-[#f1f2f8] mt-8'>
    <div className='flex justify-around max-md:flex-col items-center container mx-auto'>
      <div className=''>
        <h1 className=' font-semibold max-md:text-center text-[28px]'>We Partner With More than 10+ Companies</h1>
      </div>
      <div className='flex flex-row p-8 max-lg:flex-col items-center'>
        <div className='p-5'><img src="images/skillshare.svg" alt="" /></div>
        <div className='p-5'><img src="images/Udemy.svg" alt="" /></div>
        <div className='p-5'><img src="images/Google.svg" alt="" /></div>
        <div className='px-5 pt-1'><img src="images/coursera.svg" alt="" /></div>
        <div className='p-5'><img src="images/inter_des_found.svg" alt="" /></div>
      </div>
    </div>
    </section>
  )
}
