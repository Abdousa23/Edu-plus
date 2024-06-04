'use client'
import React, { useEffect, useState, useRef } from 'react'
import Modal from '@/app/profile/addCourse/components/popUP'
import CircularProgress from '@mui/material/CircularProgress';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import { useRouter } from 'next/navigation';

type Params = {
    params: {
        courseId: string
    }
}

export default function Page({ params: { courseId } }: Params) {
    const fetchPrivate = useFetchPrivate()
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current) return

        const enrollCourse = async () => {
            try {
                await fetchPrivate(
                    `${process.env.NEXT_PUBLIC_API_URL}/courses/enroll/${courseId}`, 
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: "include"
                    }
                )
                setLoading(false)
                router.push('/home')
            } catch (error) {
                console.error("Failed to enroll in the course:", error)
                setLoading(false)
                // Handle error appropriately
            }
        }

        enrollCourse()
        effectRan.current = true
    }, [fetchPrivate, courseId, router])

    return (
        <div>
            <Modal open={true} close={false}>
                <div className='flex flex-col gap-8 content-center items-center '>
                    {loading ? (
                        <>
                            <CircularProgress color="success" />
                            <svg width="94" height="74" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.8042 25.042L21.9831 31.9982V10.118L21.7301 9.48562L22.236 6.32375L23.3743 5.62176L38.8042 0V25.042Z" fill="#00977D"/>
                                <path d="M5.66775 25.042L21.983 31.9982V10.7504L22.236 10.118V6.32375L21.1869 5.65427L5.66775 0V25.042Z" fill="#00977D"/>
                                <path d="M2 6.70312V31.9981H14.9004" stroke="#00977D" strokeWidth="2.5295" strokeLinecap="round"/>
                                <path d="M42.472 6.70312V31.9981H29.5716" stroke="#00977D" strokeWidth="2.5295" strokeLinecap="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.236 8.47375L21.1845 7.67848V11.9882H16.7633L22.2649 22.1524L27.7664 11.9882H23.2478V7.6543L22.236 8.47375Z" fill="white"/>
                            </svg>
                            <h1 className="text-2xl font-bold text-center">Please wait until we complete the purchase</h1>
                        </>
                    ) : (
                        <h1 className="text-2xl font-bold text-center">Enrollment completed!</h1>
                    )}
                </div>
            </Modal>
        </div>
    )
}
