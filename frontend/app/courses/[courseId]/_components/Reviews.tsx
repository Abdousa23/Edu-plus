import useAuth from '@/app/_hooks/useAuth'
import React from 'react'

export default function Reviews({course}:course) {
    const { auth } = useAuth()
    return (
        <div>
            <div className='flex justify-start items-start gap-3 border-b-2 border-gray-200 py-4 w-[90%] '>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src={auth?.user?.pfp.url} className='w-full h-full ' alt="" />
                </div>
                <div>
                    <h1 className=' font-medium text-sm'>user name</h1>
                    <p className='text-neworg'>4stars</p>
                    <p className='text-[#4e5566] font-normal text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste molestiae sint maxime ullam delectus quibusdam dolores illo impedit nisi ex esse, culpa nemo asperiores recusandae aliquid minus quas quisquam!</p>
                </div>
            </div>
        </div>
    )
}
