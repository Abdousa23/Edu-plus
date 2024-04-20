import useAuth from '@/app/_hooks/useAuth'
import React, { useEffect } from 'react'
import { useState } from 'react'

type reviewsType ={
user: userType | null
}
export default function Reviews({user}:reviewsType) {
    const { auth } = useAuth()
    const [reviews, setReviews] = useState<review[]>([])
    const getReviews = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/user/${user?.username}`, {
            method: 'GET',
        })
        const data = await response?.json()
        if (response?.status === 403) {
            throw new Error('Unauthorized')
        }
        if (response.ok) {
        setReviews(data)   
        }
    }
    useEffect(()=>{
        getReviews()
    })
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
            {
                reviews.length == 0 ?
                <p>no other reviews to show</p>
                : reviews.map((review, index) => (
                    <div key={index} className='flex justify-start items-start gap-3 border-b-2 border-gray-200 py-4 w-[90%] '>
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <img src={user?.pfp.url} className='w-full h-full ' alt="" />
                        </div>
                        <div>
                            <h1 className=' font-medium text-sm'>{review.username}</h1>
                            <p className='text-neworg'>{review.rating}stars</p>
                            <p className='text-[#4e5566] font-normal text-sm'>{review.reviewtext}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
