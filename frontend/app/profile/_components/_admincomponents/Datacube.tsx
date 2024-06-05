"use client";
import React from 'react'

type Props = {
    data : number | string | null,
    dataOf : string| null,
    Icon : any,
    colors : {
        background : string | null,
        textColor : string | null

    }
    iconColor : string
}
export default function DataCube({ data , dataOf , Icon ,colors , iconColor}: Props) {
    return (
        ///flex flex-row items-center p-6 gap-6 w-[#250px] h-[#108px] bg-white shadow-lg rounded-12
    <div   style={{backgroundColor: `${colors?.background}` }}   className={  ` h-full shadow-lg rounded-12 flex flex-col  items-start justify-center p-6 gap-6 bg-opacity-40 text-[${colors.textColor}] w-1/2 sm:w-1/5   opacity-85 rounded-xl `} >
            
            <div className='flex gap-6 items-start '>
                <Icon  className={`rounded-full text-5xl opacity-100 ${iconColor}`}/>       
            </div>
            <p className='text-2xl font-semibold'>{data}</p>
            <p className='text-xl font-500 text-[#425166] font-medium'>{dataOf}</p>
            
        </div>
    )
}