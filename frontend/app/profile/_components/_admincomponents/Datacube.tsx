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
}
export default function DataCube({ data , dataOf , Icon ,colors}: Props) {
    return (
        ///flex flex-row items-center p-6 gap-6 w-[#250px] h-[#108px] bg-white shadow-lg rounded-12
    <div   style={{backgroundColor: `${colors?.background}` }}   className={  ` h-full shadow-lg rounded-12 flex flex-col  items-center justify-center p-6 gap-6 bg-opacity-40 text-[${colors.textColor}] w-1/2 sm:w-1/5   opacity-85 rounded-xl `} >
            
            <div className='flex gap-6    items-center '>
                <Icon  className="   rounded-full   text-5xl opacity-100"/>
            <p className='text-2xl'>{data}</p>
            </div>
            <p className='text-3xl font-500'>{dataOf}</p>
            
        </div>
    )
}