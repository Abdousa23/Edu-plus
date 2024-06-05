import React, { useEffect, useState } from 'react'
import { Baloo_Bhai_2 } from "next/font/google";
import { HiMiniPlayCircle } from "react-icons/hi2";
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import { useRouter } from 'next/navigation';

const BalooBhai2 = Baloo_Bhai_2({
    subsets: ['latin'],
    variable: '--font-BalooBhai2',
})

type Props = {}

const WelcomHeader = (props: Props) => {
    const Router = useRouter()
    const FetchPrivate = useFetchPrivate()
    const [number, setNumber] = useState(0)
    const getPurchasedCourse = async () => {
        const response = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/all/student`, { "Method": "GET" })
        const data: CourseType[] = await response?.json();
        setNumber(data?.length)

    }

    useEffect(() => {
        getPurchasedCourse()
    },)

    return (
        <div className='flex flex-row mx-8 justify-between my-2 content-center items-center gap-3 max-lg:flex-col max-lg:items-start  '>
            <div className='w-[70%] bg-[#00977D] flex flex-row gap-6 rounded-[20px] justify-between max-md:w-full'>
                <div className='flex flex-col gap-6 p-4 mx-auto'>
                    <h1 className='text-[12px] font-light text-white'> ONLINE COURSES</h1>
                    <div className='text-[24px] font-semibold text-white'>
                        <h1>Sharpen Your Skills With</h1>
                        <h1>Professional Online Courses</h1>
                    </div>
                    <button className='bg-black text-white rounded-[40px] font-medium text-[12px] w-[120px] p-2 flex flex-row justify-around content-center items-center' onClick={() => Router.push('/home')}>
                        <div>
                            CONTINUE
                        </div>
                        <HiMiniPlayCircle style={{ fontSize: 24 }} />
                    </button>
                </div>
                <svg width="221" height="210" viewBox="0 0 221 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M111 45C111 45 113.207 65.5997 121.804 74.1964C130.4 82.793 151 85 151 85C151 85 130.4 87.207 121.804 95.8036C113.207 104.4 111 125 111 125C111 125 108.793 104.4 100.196 95.8036C91.5997 87.207 71 85 71 85C71 85 91.5997 82.793 100.196 74.1964C108.793 65.5997 111 45 111 45Z" fill="white" fill-opacity="0.25" />
                    <path d="M181 93C181 93 183.207 113.6 191.804 122.196C200.4 130.793 221 133 221 133C221 133 200.4 135.207 191.804 143.804C183.207 152.4 181 173 181 173C181 173 178.793 152.4 170.196 143.804C161.6 135.207 141 133 141 133C141 133 161.6 130.793 170.196 122.196C178.793 113.6 181 93 181 93Z" fill="white" fill-opacity="0.1" />
                    <path d="M40 122C40 122 42.207 152.385 50.8036 165.065C59.4003 177.745 80 181 80 181C80 181 59.4003 184.255 50.8036 196.935C42.207 209.615 40 240 40 240C40 240 37.793 209.615 29.1964 196.935C20.5997 184.255 0 181 0 181C0 181 20.5997 177.745 29.1964 165.065C37.793 152.385 40 122 40 122Z" fill="white" fill-opacity="0.1" />
                    <path d="M171.5 -59C171.5 -59 173.183 -28.6154 179.738 -15.9354C186.293 -3.25534 202 -3.8147e-06 202 -3.8147e-06C202 -3.8147e-06 186.293 3.25534 179.738 15.9354C173.183 28.6154 171.5 59 171.5 59C171.5 59 169.817 28.6154 163.262 15.9354C156.707 3.25534 141 -3.8147e-06 141 -3.8147e-06C141 -3.8147e-06 156.707 -3.25534 163.262 -15.9354C169.817 -28.6154 171.5 -59 171.5 -59Z" fill="white" fill-opacity="0.1" />
                    <path d="M40.5 20C40.5 20 42.1828 35.4498 48.7378 41.8973C55.2927 48.3447 71 50 71 50C71 50 55.2927 51.6553 48.7378 58.1027C42.1828 64.5502 40.5 80 40.5 80C40.5 80 38.8172 64.5502 32.2622 58.1027C25.7073 51.6553 10 50 10 50C10 50 25.7073 48.3447 32.2622 41.8973C38.8172 35.4498 40.5 20 40.5 20Z" fill="white" fill-opacity="0.1" />
                </svg>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-white shadow-md flex flex-col gap-2 content-center items-center w-[200px] p-4 border-none rounded-r-lg'>
                    <div className='bg-[#C4E7E1] flex flex-row content-center p-1 w-[95%] justify-around items-center rounded-sm'>
                        <h1 className={`${BalooBhai2} font-bold text-[33.3px] `}>
                            {number}
                        </h1>
                        <h1 className='text-[12px] font-normal'>Courses purchased</h1>
                    </div>

                </div>

                <div className='bg-white shadow-md flex flex-col gap-2 content-center items-center w-[200px] p-4 border-none rounded-r-lg'>
                    <div className='bg-[#C4E7E1] flex flex-row content-center p-1 w-[95%] justify-around items-center rounded-sm'>
                        <h1 className={`${BalooBhai2} font-bold text-[33.3px] `}>
                            {number}
                        </h1>
                        <h1 className='text-[12px] font-normal'> Downloaded courses</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WelcomHeader