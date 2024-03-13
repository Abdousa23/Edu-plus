import React from 'react'
import Card from '@/app/auth/register/_components/Card'
export default function Section3() {
  return (
    <section className='bg-[#FFF5DF] py-4'>
        <div className="container mx-auto flex-col flex ">
            <h1 className='font-semibold text-center text-[43px]'>Who should use our <span className='text-green+'> platform</span></h1>
            <p className='text-center font-medium text-[#8d8d8d]'>we provide a platform that gives the opportunity to instructors to publish courses and also the possibility to the students to apply for them</p>
            <div className='flex justify-evenly my-8'>
                    <Card title='student' onclick={(e)=>{return null}} photo='student-studying' />
                    <Card title='instructor'  onclick={(e)=>{return null}} photo='business-presentation' />
            </div>
        </div>
    </section>
  )
}
