import React from 'react'

export default function Section5() {
    return (
        <section className='bg-[#f4fbf9]'>
            <div className="container mx-auto flex gap-8 max-md:flex-col max-md:text-center py-16">
                <div className='flex-1'>
                    <h1 className='font-semibold text-[50px]'>We provide <span className='text-green+'>two types</span> of courses</h1>
                    <p className='font-medium text-base text-[#6D737A]'>Saas become a common delivery model for many business application, including office software,messaging software,payroll processing software,DBMS software, management software</p>
                </div>
                <div className='flex-1 flex flex-col justify-between'>
                     <div className='flex items-top max-md:flex-col'>
                        <div className=' min-w-[24%]'>
                            <img src="images/Group1940.svg" className='max-w-full' alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-[28px]'>Online Courses</h2>
                            <p className='font-medium text-lg text-[#6D737A]'>Plan,collaborate,and publishing your content that drives meaningful angagement and growth for your brand</p>
                        </div>
                    </div>
                    <div className='flex items-center max-md:flex-col '>
                        <div className=' min-w-[24%]'>
                            <img src="images/Group1941.svg"  alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-[28px]'>In-person Courses</h2>
                            <p className='font-medium text-lg text-[#6D737A]'>Analyze your performance and create gorgeous report</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
