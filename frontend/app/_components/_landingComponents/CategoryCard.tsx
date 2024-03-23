import React, { useState } from 'react'
import { Edit } from '@mui/icons-material';
import CallMadeTwoToneIcon from '@mui/icons-material/CallMadeTwoTone';
import Link from 'next/link';
type CategoryCardProps = {
  category: string,
  isInverted: boolean,
  onClick: () => void

}
export default function CategoryCard({ category,isInverted, onClick }: CategoryCardProps) {
  

  return (
    <div onClick={onClick} className= {`flex items-center justify-between p-4 max-lg:px-2 gap-2 w-[100%] h-20 border bg-white shadow-md rounded-lg order-3 flex-none ${isInverted ? 'bg-org  border-org' : 'bg-white border'}`}>
        <div className='flex items-center justify-around'>
            <Edit />
            <p className='font-medium ml-4 text-xl'>{category}</p>
        </div>
        <Link href={'/categories'} 
          className={`flex flex-row justify-center items-center p-2 gap-2 w-11 h-11 rounded-lg order-1 flex-none ${isInverted ? 'bg-org text-white border-white' : 'bg-white text-org border-org'}`}
        >
          <CallMadeTwoToneIcon />
        </Link>
    </div>
  )
}