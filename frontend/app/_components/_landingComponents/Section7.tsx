import React from 'react'

export default function Section7() {
    return (
        <section className='container mx-auto my-20 max-md:text-center'>
            <h1 className='font-semibold text-[40px]'>Our <span className='text-green+'>Achievement</span></h1>
            <p className='font-normal text-xl text-[#6d737a]'>we achieved remarkable results through various domains</p>
            <div className='flex items-center gap-32 mt-16 '>
                <div className='flex items-center justify-between flex-1'>
                    <div className="flex flex-col">
                        <div className=' flex max-md:flex-col items-center justify-between mb-8'>
                            <img src="images/frame67.svg" alt="" />
                            <div className='ml-2'>
                                <h1 className='font-semibold text-[32px]'>300</h1>
                                <p className='text-xl font-normal text-[#6d737a]'>Instructor</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-8 max-md:flex-col'>
                            <img src="images/frame68.svg" alt="" />
                            <div className='ml-2'>
                                <h1 className='font-semibold text-[32px]'>10,000</h1>
                                <p className='text-xl font-normal text-[#6d737a]'>Video</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center max-md:flex-col mb-8'>
                            <img src="images/frame69.svg" alt="" />
                            <div className='ml-2'>
                                <h1 className='font-semibold text-[32px]'>20,000+</h1>
                                <p className='text-xl font-normal text-[#6d737a]'>Student</p>
                            </div>
                        </div>
                        <div className='flex items-center max-md:flex-col mt-8'>
                            <img src="images/frame70.svg" alt="" />
                            <div className='ml-2'>
                                <h1 className='font-semibold text-[32px]'>100,000+</h1>
                                <p className='text-xl font-normal text-[#6d737a]'>Users</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex-1 w-full flex items-center justify-center max-[991px]:hidden'>
                    <img src="images/persons.svg" className='max-w-full flex-1' alt="" />
                </div>
            </div>
        </section>
    )
}
