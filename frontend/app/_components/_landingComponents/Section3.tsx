import React from 'react'
import Card from '@/app/auth/register/_components/Card'
export default function Section3() {
  return (
       <section className='bg-[#FFFAF5] py-4 '>
        <div className="container mx-auto flex-col flex  my-20">
            <p className=' font-semibold text-lg  text-neworg my-4 '>Embark on Your Learning Journey !</p>
            <h1 className='font-semibold text-left text-[43px] mb-3'>Discover Your Unique Role in our <span className='text-green+'> platform</span></h1>
            <p className='text-left font-regular text-[#8d8d8d] text-[20px] my-3'>Our platform caters to both students and teachers, providing a diverse range of educational opportunities. Whether you're here to learn or to teach, we have the tools and resources to support your journey. Select your role below to get started.</p>
            <div className='flex justify-evenly my-8'>
                    <Card title='Student' onclick={(e)=>{return null}} photo='student-studying' />
                    <Card title='Instructor'  onclick={(e)=>{return null}} photo='business-presentation' />
            </div>
        </div>
    </section>
  )
}
