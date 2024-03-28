import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link';
export default function Footer() {
  const isAuthenticated = localStorage.getItem('accessToken');
  return (
    <footer>
     <div className='flex gap-[5%]'>
     <div className=' md:border-r-4 w-[30%] md:border-[#363636] max-md:w-full'>
        <div className='w-7/12 mx-auto'>
        <div className='w-full mb-4 max-md:ml-6 '>
            <img src="edulogo.svg" className='max-w-full' alt="" />
        </div>
        <h1 className=' text-lg font-medium my-4'>Unleashing the Power of Education</h1>
        <div className='flex justify-around py-8'>
          <div className='bg-[#4dc39e] rounded-md flex h-9 w-9 justify-center items-center'>
          <FacebookOutlinedIcon className='text-white w-full h-full' />
          </div>
          <div className='bg-[#4dc39e] flex rounded-md h-9 w-9 justify-center items-center'>
          <LinkedInIcon  className='text-white w-full h-full' />
          </div>
          <div className='bg-[#4dc39e] flex justify-center h-9 w-9  rounded-md items-center'>
          <InstagramIcon  className='text-white w-full h-full' />
          </div>
          <div className='bg-[#4dc39e] flex justify-center h-9 w-9  rounded-md items-center'>
          <XIcon  className='text-white w-full h-full' />
          </div>
        </div>
        </div>
        </div>
      <div className='w-[30%] max-md:hidden'>
        <h1 className='font-semibold text-[26px] mb-4'>Useful links</h1>
        <ul>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={isAuthenticated?'/home':'/'}>Home</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/community'}>Community</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/aboutus'}>About us</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/FAQ'}>FAQ</Link></li>
        </ul>
      </div>
      <div className='w-[30%] max-md:hidden'>
        <h1 className='font-semibold text-[26px] mb-8'>Main menu</h1>
        <ul>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={isAuthenticated?'/home':'/'}>Home</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/'}>online</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/'}>In-person</Link></li>
          <li className='font-medium text-2xl text-[#363636] px-2 py-4'><Link href={'/'}>Categories</Link></li>
        </ul>
      </div>
     </div>
     <div className='text-center text-base font-medium'>
      <p>Created By FDC</p>
      <p>Copyright &copy; 2024 Edu+.All Rights Reserved </p>
     </div>
     </footer>
  )
}
