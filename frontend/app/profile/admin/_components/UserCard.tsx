import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function UserCard() {
  return (
    <div className='flex w-full mx-auto items-center justify-between bg-white border-b-2 border-gray-300 py-2'>
      <div className='flex items-center  gap-8 ml-2'>
        <input type="checkbox" />
        <div className='flex items-center gap-2'>
            <div className='w-10 rounded-full'>
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" className='max-w-full' alt="" />
            </div>
            <div>
                <h1 className='text-base font-medium'>username</h1>
                <p className='text-sm font-normal text-[#667085]'>email</p>
            </div>
        </div>
        <div className='max-md:hidden'>
            courses 
        </div>
      </div>
      <div className='mr-2'>
        <button><DeleteIcon /></button>
      </div>
    </div>
  )
}
