import { Facebook, Mail, Twitter, WhatsApp } from '@mui/icons-material'
import React, { useEffect } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import ErrorComponent from '@/app/_components/Error';
import Success from '@/app/_components/Success';
import { useState } from 'react';
type course = {
    course?: CourseType
}
export default function CourseSidebar({ course }: course) {
    const [error, setError] = useState<ErrorProps>({ errmessage: '' });
    const [successMessage,setSuccessMessage]=useState('')
    const fetchPrivate = useFetchPrivate();

    const addToCart = async ()=>{
        try {
            const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/cart/add`,{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    courseId: course?._id
                })
            })
            const data = await response?.json();
            if(!response?.ok){
                throw new Error(data.message)
            }
            setSuccessMessage("course added to cart succesfullly")
        } catch (error:any) {
            setError({ errmessage: error.message })
        }
    }

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer test_sk_0ofp9nTLMQWqlHLFsHF3AGAmx3wQjVTKnFGpRHAT` ,
            "Content-Type": "application/json",
        },
        body:`{"items":[{"price":"${course?.priceId}","quantity":1,"name":"${course?._id}"}],"success_url":"https://edu-plus-nine.vercel.app//success/${course?._id}"}`,
    };
    const purchaseCourse = async ()=>{
        console.log(course?.price)
        const res =  fetch("https://pay.chargily.net/test/api/v2/checkouts", options)
        .then((response) => response.json())
        .then((response) =>{ console.log(response)
            return response
        })
        .catch((err) => console.error(err));
        const response = await res
        window.location.href = response.checkout_url

    }
    useEffect(()=>{
        console.log('shut the fuck up : ' ,course)
    } , [])
    return (
        <div className='flex flex-col justify-center items-center  gap-7 relative w-full h-[fit]  top-[0px] bg-white border-[1.1934px] border-gray-100 shadow-md'>
            <div className='border-[1.1934px] border-gray-100 w-full flex items-center justify-start h-20'>
                <h1 className='font-normal text-2xl text-[#ff0000] ml-10'>Price:</h1>
                <p className='font-normal text-2xl text-[#ff0000]'>{course?.price}$</p>
            </div>
            <div className='  border-b-[1.1934px] border-gray-100 w-full flex flex-col items-center'>
                <ul className='w-[80%]'>
                    <li className='flex w-full justify-between'>

                        <h1 className='font-normal text-base'><span className='text-base font-normal text-[#6e7485]'></span><AccessTimeIcon className='text-base font-normal text-[#6e7485]' /> Course Duration</h1>
                        <p className='text-base font-normal text-[#6e7485]'>27 hours</p>

                    </li>
                    <li className='flex w-full justify-between'>
                        <h1 className='font-normal text-base'><span className='text-base font-normal text-[#6e7485]'></span><SignalCellularAltIcon className='text-base font-normal text-[#6e7485]' /> Course level</h1>
                        <p className='text-base font-normal text-[#6e7485]'>intermediate</p>

                    </li>
                    <li className='flex w-full justify-between'>

                        <h1 className='font-normal text-base'> <span className='text-base font-normal text-[#6e7485]'></span><PeopleAltIcon className='text-base font-normal text-[#6e7485]' /> students enrolled</h1>
                        <p className='text-base font-normal text-[#6e7485]'>10000</p>

                    </li>
                    <li className='flex w-full justify-between'>
                        <h1 className='font-normal text-base'><span className='text-base font-normal text-[#6e7485]'></span><LanguageIcon className='text-base font-normal text-[#6e7485]' /> Language</h1>
                        <p className='text-base font-normal text-[#6e7485]'>English</p>

                    </li>
                </ul>
            </div>
            <div className='border-b-[1.1934px] border-gray-100 w-[90%] h-32 gap-4 flex flex-col items-center'>
                <button onClick={addToCart} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%]  max-sm:h-8 max-sm:text-sm h-16 bg-[#00977D] border-2 border-[#00977D] rounded-lg order-5 self-stretch flex-grow-0 text-white text-xl font-semibold'>add to cart</button>
                <button onClick={purchaseCourse} className='flex flex-row justify-center items-center mx-1 px-4 py-2 w-[100%]  max-sm:h-8 max-sm:text-sm h-16 bg-[#cde7e1] border-2 border-[#c4e7e1] rounded-lg order-5 self-stretch flex-grow-0 text-green+ text-xl font-semibold'>buy now</button>
            </div>
        {
            error.errmessage !== '' && <ErrorComponent errmessage={error.errmessage} />
        }
        {
            successMessage.length > 0 && <Success successMessage={successMessage} />
        }
            <div className='border-b-[1.1934px] border-gray-100 w-full flex flex-col ml-2'>
                <h1 className='font-medium text-xl w-[90%] mx-auto '>this course includes</h1>
                <ul className='font-normal text-base w-[90%] mx-auto text-[#4e5566]'>
                    <li className='my-2'><span className='text-green+'></span><AccessTimeIcon className='text-green+' /> lifetime access</li>
                    <li className='my-2'><span className='text-green+'></span><ListAltOutlinedIcon className='text-green+' /> free exercises file & downloadable resources</li>
                    <li className='my-2'><span className='text-green+'></span><EmojiEventsOutlinedIcon className='text-green+' /> sheareable certificate of comletion</li>
                    <li className='my-2'><span className='text-green+'></span><TvOutlinedIcon className='text-green+' /> access on mobile,tablet and tv</li>
                    <li className='my-2'><span className='text-green+'></span><LayersOutlinedIcon className='text-green+' /> 100%{course?.type === 'online' ? 'online' : 'offline'} course</li>
                </ul>
            </div>
            <div className='border-b-[1.1934px] border-gray-100 w-full flex flex-col'>
                <h1 className='font-medium text-xl w-[90%] mx-auto '>Share this course</h1>
                <ul className='text-base font-medium text-[#4e5566] w-[90%] mx-auto flex '>
                    <li className='flex justify-center items-center bg-[#f5f7fa] my-4 mx-2 px-2 py-4 w-fit h-14'><ContentCopyIcon /> copy link</li>
                    <li className='flex justify-center items-center bg-[#f5f7fa] my-4 mx-2 px-2 py-4 w-14 h-14'><Facebook /></li>
                    <li className='flex justify-center items-center bg-[#f5f7fa] my-4 mx-2 px-2 py-4 w-14 h-14'> <Twitter /> </li>
                    <li className='flex justify-center items-center bg-[#f5f7fa] my-4 mx-2 px-2 py-4 w-14 h-14'> <Mail /> </li>
                    <li className='flex justify-center items-center bg-[#f5f7fa] my-4 mx-2 px-2 py-4 w-14 h-14'> <WhatsApp /></li>
                </ul>
            </div>
        
        </div>
    )
}
