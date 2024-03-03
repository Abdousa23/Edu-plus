'use client'
import React, { useState } from 'react'
import Card from './Card'
import Link from 'next/link'

export default function User() {
    const [step, setStep] = useState(0)
    const handlestep = () => {
        setStep(step + 1)
        console.log(step)
    }
    return (
        <div className=' bg-[#FFF5DF] h-screen  flex justify-center items-center w-screen'>
            <div className=' bg-white w-[85%] h-[90%] flex flex-col justify-center items-stretch mx-auto'>
                <div>
                    <h1 className=' font-semibold text-[50px] text-center max-md:text-[30px]'>Register in Edu <span className='text-org'>+</span> as</h1>
                </div>
                <div className='flex justify-evenly my-8'>
                    <Card title='student' onclick={()=>handlestep()} photo='student-studying' />
                    <Card title='instructor'  onclick={handlestep} photo='business-presentation' />
                </div>
                <p className='text-center'>or</p>
                <div className='flex justify-center items-center w-[40%] mx-auto my-8'>
                    <Link href={'/auth/login'} className='flex flex-row justify-center items-center px-4 py-2 w-[100%]  h-full border-2 rounded-lg order-5 self-stretch flex-grow-0 text-base text-white bg-green+ border-green+'>Log in</Link>
                </div>
            </div>
        </div>

    )
}
