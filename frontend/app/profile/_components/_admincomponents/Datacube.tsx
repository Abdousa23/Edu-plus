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
    <div className={`w-1/5 h-full shadow-lg rounded-12 flex flex-col  items-center justify-center p-6 gap-6 bg-[#6BA49A] text-[${colors.textColor}] p`} >
            
            <div className='flex gap-6  w-24  items-center '>
                <Icon/>
            <p className='text-2xl'>{data}</p>
            </div>
            <p className='text-3xl font-500'>{dataOf}</p>
            
        </div>
    )
}