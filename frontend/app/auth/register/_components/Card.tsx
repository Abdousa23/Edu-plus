import React from 'react'
type CardProps = {
    title: string;
    photo: string;
    onclick:()=>void;
}
export default function Card({title,photo,onclick}:CardProps) {
  return (
    <div className='flex flex-col w-[30%] text-center p-4  shadow-lg flex-none order-0 flex-grow-0' onClick={onclick}>
        <img src={`/images/${photo}.svg`} className='max-w-[100%]' alt="" />
        <p className=' font-medium md-text-[42px] sm-text-[25px]'>{title}</p>
    </div>
  )
}
