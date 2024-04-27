
import { Height } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'

type Props = {
    data : any,
    dataOf : string,
    Icon : any,
    colors : {
        background : string,
        textColor : string
    
    }
}

export default function DataCube({ data , dataOf , Icon ,colors}: Props) {
    return (///flex flex-row items-center p-6 gap-6 w-[#250px] h-[#108px] bg-white shadow-lg rounded-12
        <div className='w-[250px] bg-white shadow-lg rounded-md flex flex-row items-center p-6 gap-6  '>
            <Icon style={{ fontSize: 60 }} height={150} width={0} className={`${colors.background} ${colors.textColor}  text-[100px] w-0 rounded-lg border-none`}/>
            <div className='flex flex-col items-start'>
                <h1 className=' font-bold leading-32 font-inter font-400 text-gray-900'>{data}</h1>
                <h1 className=' font-normal leading-32 font-inter font-400 text-gray-900'>{dataOf}</h1>
                </div>
        </div>
    )
}