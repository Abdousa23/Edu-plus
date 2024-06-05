import React from 'react'
import MapPage from './MapPage'
import useFetchPrivate from "@/app/_hooks/useFetchPrivate";
import {useRouter} from 'next/navigation';

type course = {
    course?: CourseType
}
export default function CourseLocation({course}:course) {
    const router = useRouter()
    const fetchPrivate = useFetchPrivate()
    const confirmArrival = async (e : React.MouseEvent<HTMLButtonElement>)=>{
        const res = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/confirm/${course?._id}` , {
            "method" : "POST",
        })
        const response = await res?.json()
        console.log(response)
        router.push('/home')
    }

    return (
        <div className='flex flex-col content-center items-center gap-8'>
            <MapPage adr={course?.location || ''} />
            <button className="bg-[#00977D] w-[90px]" onClick={(e)=>confirmArrival(e)}>
            <p className='my-1 text-[15px] text-white font-semibold'>
                    Confirm Arrival
            </p>
            </button>

        </div>
    )
}
