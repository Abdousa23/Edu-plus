"use client"
import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/_components/Navbar' 
import Footer from '@/app/_components/Footer' 
import LanguageIcon from "@mui/icons-material/Language";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const page = () =>{
  return(
    <div>
      <Navbar/>
      <div className='flex items-center justify-center gap-7 md:gap-10 lg:gap-18 mt-8 mb-12'>
        <div  className='flex flex-col items-start justify-center gap-2'>
          <h3 className='font-bold text-[30px] md:text-[40px] lg:text-[50px]'>Contact</h3>
          <div className='flex items-center justify-center gap-2'>
            <LanguageIcon className="text-green+" />
            <p className='font-bold'>Phone number : <span className='font-light text-slate-700'>+213696972626</span> </p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <LanguageIcon className="text-green+" />
            <p className='font-bold'>email : <span className='font-light text-slate-700'>halfoun.c@gmail.com</span> </p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <LanguageIcon className="text-green+" />
            <p className='font-bold'>location : <span className='font-light text-slate-700'>Amizour RN 26 Bejaia Algeria</span> </p>
          </div>
          <div className="flex justify-around gap-3">
            <div>
                <FacebookOutlinedIcon className="text-[#4dc39e] w-full h-full" />
                <Link href="/">Edu+_fb</Link>
            </div>
            <div>
                <LinkedInIcon className="text-[#4dc39e] w-full h-full" />
                <Link href="/">Edu+_in</Link>
            </div>
            <div>
                <InstagramIcon className="text-[#4dc39e] w-full h-full" />
                <Link href="/">Edu+_ig</Link>
            </div>
            <div>
                <XIcon className="text-[#4dc39e] w-full h-full" />
                <Link href="/">Edu+_X</Link>
            </div>
          </div>
        </div>
        <div className='hidden md:inline-block'>
            <img src="/images/analyze-data.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] '></img>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default page