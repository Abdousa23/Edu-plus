import React from 'react'
import useFormContext from '../../hooks/useFormContext'
import { LuLayers } from "react-icons/lu";
import { SiReacthookform } from "react-icons/si";
import { PiVideoDuotone } from "react-icons/pi";
const SI = SiReacthookform
type Props = {
}

const ChangeBar = ({}: Props) => {
    const {step} = useFormContext()
    return (
        <div className='flex flex-row justify-between my-0 py-0 max-md:hidden border-b'>
            {step!==0?(<div className='flex w-1/3'>
            <div className='mx-4 flex justify-between content-center items-center gap-2'>
                <LuLayers className='text-[#6E7485]'/>
            <p className='text-[#6E7485] font-thin '>Basic Information</p>
            </div>
            </div>) :
            (
            <div className='flex border-b-2 border-[#FF6636] w-1/3'>
                <div className='mx-4 flex justify-between content-center items-center gap-2'>
                <LuLayers className='text-[#6E7485]'></LuLayers>
                <p className='font-medium text-[#1D2026] mx-2'>Basic Information</p>
                </div>
            </div>)
            }

            {step!==1?(<div className='flex w-1/3' >  
            <div className='mx-4 flex justify-between content-center items-center gap-2'>
                <SI className='text-[#6E7485]'></SI>
            <p className='text-[#6E7485] font-thin mx-auto '>Advanced Information</p>
            </div>
            </div>) :
            (
            <div className='flex border-b-2 border-[#FF6636] w-1/3'>
                <div className='mx-4 flex justify-between content-center items-center gap-2'>
                <SI className='text-[#6E7485]'></SI>
                <p className='font-medium text-[#1D2026] mx-auto'>Advanced Information</p>
                </div>
            </div>)
            }

            {step!==2?(<div className='flex w-1/3' >
            <div className='mx-4 flex justify-between content-center items-center gap-2'>
            <PiVideoDuotone></PiVideoDuotone>
            <p className='text-[#6E7485] font-thin mx-auto '>Curriculum</p>
            </div>
            </div>) :
            (
            <div className='flex w-1/3 border-b-2 border-[#FF6636]'>
                <div className='mx-4 flex justify-between content-center items-center gap-2'>
                <PiVideoDuotone></PiVideoDuotone>
                <p className='font-medium text-[#1D2026] mx-auto'>Curriculum</p>
                </div>
            </div>)
            }


        </div>
    )
}

export default ChangeBar