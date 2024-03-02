import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

export default function Navbar() {
    return (
    <header className=' '>

        <nav className=' navbar bg-base-100 max-w-[1440] mx-auto  flex items-center justify-between py-6  '>

            <Link href="/" className='flex justify-center items-center '>
            <div>
            <Image
            src="/edulogo.png"
            alt="logo image"
            width={175}
            height={20}
            className="object-container m-10"
            />

            </div>
            </Link> 
            
            <div className='flex justify-between items-center w-[80vh] gap-2'>
                
            <label className="input input-bordered flex items-center w-96 rounded-full">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <Link href="/">
                <h1 className='text-2xl'>Home</h1>
            </Link>
            <Link href="categories">
            <h1 className='text-2xl'>Categories</h1>
            </Link>
            <Link href="/AboutUs">
            <h1 className='text-2xl'>About Us</h1>
            </Link>
            </div>

            <div className=' flex justify-end gap-8  mx-8' >
                <CustomButton 
            title="login"
            containerStyle="  color-offblack border-2 rounded-full h-[6vh] w-[20vh] text-2xl "
            btnType='button'
            />


            <CustomButton 
            title="register"
            containerStyle="bg-green+ text-white  rounded-full h-[6vh] w-[20vh] text-2xl  "
            btnType='button'  />




            <Link href="/" className=''>
                <Image src="/net.png"
                    alt='button img ' 
                    width={40}
                    height={40}
                    className='object-container ' />
            
            </Link>
                </div>
        
        </nav>

    </header>
)
}
