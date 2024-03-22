'use client'
import React from 'react'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function page() {
  return (
    <div className='flex'>
    
    <Sidebar />
    
    <div className='flex container mx-auto'>
      <div className='flex-grow'>
        <div className=' text-[#1d2026]  '>
        <Navbar />
          <h1 className=' font-semibold text-xl ml-8 my-4 '>Account Settings</h1>
          <div className=' w-full gap-4'>
            <form action="" className=' mx-8 font-normal text-xs'>
              <div className='flex max-md:flex-col w-full gap-4 '>
                <div className='flex-grow'>
                  <div className='flex   gap-4'>
                    <div className='flex-1'>
                      <label htmlFor="">First Name</label>
                      <input type="text" className='abdouinput my-1' placeholder="First Name" />
                    </div>
                    <div className=' flex-1'>
                      <label htmlFor="">Last Name</label>
                      <input type="text" className='abdouinput my-1' placeholder="Last Name" />
                    </div>
                  </div>
                  <label htmlFor="">Username</label>
                  <input type="text" className='abdouinput my-1' placeholder="Username" />
                  <label htmlFor="">Email</label>
                  <input type="email" className='abdouinput my-1' placeholder="Email" />
                  <label htmlFor="">Phone Number</label>
                  <input type="text" className='abdouinput my-1' placeholder="Phone Number" />
                  <label htmlFor="">Country</label>
                  <input type="text" className='abdouinput my-1' placeholder="Country" />
                  <label htmlFor="">City</label>
                  <input type="text" className='abdouinput my-1' placeholder="City" />
                  <label htmlFor=""> bio</label>
                  <textarea name="bio" placeholder='Your title, proffesion or small biography' className='abdouinput my-1' id="" cols={30} rows={10}></textarea>

                </div>
                <div className='h-fit w-56 flex-none bg-[#f5f7fa] my-4'>
                  <input type="file" id="file" className="hidden" />
                  <label htmlFor="file" className=' mx-auto flex flex-col justify-center items-center '>
                    <img src="/images/persons.svg" alt="" className='w-40 h-40 m-6 bg-white ' />
                    <div className="cursor-pointer bg-black opacity-50  w-fit h-fit text-white text-xs font-medium px-4 py-2">
                      <FileUploadOutlinedIcon className='mx-auto' />Upload photo
                    </div>
                  </label>
                  <p className='font-normal text-[10px] text-[#6e7485] text-center'>image size should be under 1MB</p>
                </div>

              </div>
              <button type='submit' className='flex flex-row justify-center items-center mx-1 my-4 px-4 py-2 w-fit  max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Save Changes</button>
            </form>

          </div>
        </div>
        <div className='w-2/5 max-md:w-full'>
          <h1 className=' font-semibold text-xl ml-8 my-4 '>Change Password</h1>
          <form action="" className='w-9/12 mx-8 font-normal text-xs'>
            <label htmlFor="">Old Password</label>
            <input type="password" className='abdouinput my-1' placeholder="Old Password" />
            <label htmlFor="">Password</label>
            <input type="password" className='abdouinput my-1' placeholder="Password" />
            <label htmlFor="">Confirm Password</label>
            <input type="password" className='abdouinput my-1' placeholder="Confirm Password" />
            <button type='submit' className='flex flex-row justify-center items-center mx-1 my-4 px-4 py-2 w-fit max-sm:text-sm h-11 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-base'>Save Changes</button>

          </form>
        </div>
      </div>
    </div>

    </div>  )
}
