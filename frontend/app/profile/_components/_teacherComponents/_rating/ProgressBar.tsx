import React from 'react'

type Props = {
    width: number

}

const ProgressBar = ({width}: Props) => {
    const margin = width===0? 'mx-4' : 'mx-[12px]'
    return (
        <div className='flex items-center'>
            <div className='w-[350px] h-[10px] bg-[#E5E5E5] rounded-full flex flex-row justify-between max-md:hidden max-lg:w-[100px] max-xl:w-[250px]  '>
                <div style={{width:width +'%'}} className={`h-[10px] bg-[#FF8E01] rounded-full`}></div>
                
            </div>
            <div>
            <p className={`text-[#1D2026] font-medium ${margin}`}>{Math.round(width)}%</p>
            </div>
        </div>
    )
}

export default ProgressBar