import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Rstar from './_rating/Rstar'
import ProgressBar from './_rating/ProgressBar'

type Props = {
    ratings: number[]
}

const RatingsChart = ({ ratings }: Props) => {
    let totalRatings = 0
    if (ratings.length !== 0) {
        totalRatings = ratings.reduce((acc, rating) => {
            return (acc + rating) / ratings.length
        })
        console.log(totalRatings)
    }
    const widthCalc = (rate: number) => {
        let raters = 0
        ratings.map((element) => {
            if(Math.round(element)===rate) raters +=1
        })
    return (raters *100)/ratings.length
    }

    return (
        <div className=' bg-white flex flex-col w-[50%] h-[70%] my-auto max-sm:w-[90%] max-md:h-[100%]'>
            <h1 className='font-medium text-[15px] leading-5 my-5 mx-6'>Overall course rating</h1>
            <hr className='my-2'></hr>
            <div className='flex flex-col w-[30%] bg-[#FFF2E5] content-center  h-[153px] items-center overflow-hidden mx-auto'>
                <h1 className='font-semibold text-[45px] my-5 leading-10'>{Math.round(totalRatings)}</h1>

                    <Rstar length={Math.round(totalRatings)} starWidth={40} />
                <h1 className='font-medium text-[11.18px] my-2 '>Overall rating</h1>
            </div>
            <hr className='my-2'></hr>
            <div className='flex flex-col gap-y-2 p-2 '>
                <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <Rstar length={5} starWidth={15} />
                    <h1 className='text-[#4E5566]' >5 stars</h1>
                    </div>
                    <ProgressBar width={widthCalc(5)} />
                    
                </div>
                <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <Rstar length={4} starWidth={15} />
                    <h1 className='text-[#4E5566]' >4 stars</h1>
                    </div>
                    <ProgressBar width={widthCalc(4)} />
                </div>
                <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>

                    <Rstar length={3} starWidth={15} />
                    <h1 className='text-[#4E5566]' >3 stars</h1>
                    </div>
                    <ProgressBar width={widthCalc(3)} />
                </div>
                <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <Rstar length={2} starWidth={15} />
                    <h1 className='text-[#4E5566]' >2 stars</h1>
                    </div>
                    <ProgressBar width={widthCalc(2)} />
                    
                </div>
                <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <Rstar length={1} starWidth={15} />
                    <h1 className='text-[#4E5566]' >1 star</h1>
                    </div>
                    <ProgressBar width={widthCalc(1)} />
                </div>

            </div>
<hr></hr>
        </div>
    )
}

export default RatingsChart