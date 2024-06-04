"use client"
import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/_components/Navbar' 
import Footer from '@/app/_components/Footer' 
// import LanguageIcon from "@mui/icons-material/Language";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const page = () =>{
  return(
    <div>
      <Navbar/>
      <div className='flex items-center justify-center gap-7 md:gap-10 lg:gap-18 mt-8 mb-12'>
        <div  className='flex flex-col items-start justify-center gap-2'>
          <h3 className='font-bold text-[30px] md:text-[40px] lg:text-[50px]'>Contact</h3>
          <div className='flex items-center justify-center gap-2'>
            <PhoneInTalkRoundedIcon className="text-green+" />
            <p className='font-bold'>Phone number : <span className='font-light text-slate-700'>+213696972626</span> </p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <EmailOutlinedIcon className="text-green+" />
            <p className='font-bold'>email : <span className='font-light text-slate-700'>halfoun.c@gmail.com</span> </p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <FmdGoodOutlinedIcon className="text-green+" />
            <p className='font-bold'>location : <span className='font-light text-slate-700'>Amizour RN 26 Bejaia Algeria</span> </p>
          </div>
          <div className="flex justify-around gap-3">
            <div>
                <Link href="/">
                <FacebookOutlinedIcon className="text-[#4dc39e] w-10 h-10" />
                </Link>
            </div>
            <div>
                <Link href="/">
                <LinkedInIcon className="text-[#4dc39e] w-10 h-10" />
                </Link>
            </div>
            <div>
                <Link href="/">
                <InstagramIcon className="text-[#4dc39e] w-10 h-10" />
                </Link>
            </div>
            <div>
                <Link href="/">
                <XIcon className="text-[#4dc39e] w-10 h-10" />  
                </Link>
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