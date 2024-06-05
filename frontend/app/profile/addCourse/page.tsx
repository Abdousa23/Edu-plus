'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import BasicInformation from './components/basicInformation'
import Curriculum from './components/Curriculum'
import Styles from '../page.module.css'
import AdvancedInformation from './components/AdvancedInformation'
import useFormContext from './hooks/useFormContext'
import Sidebar from '../_components/Sidebar'
import Navbar from '@/app/_components/Navbar'
import Error from 'next/error'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'
import ChangeBar from './components/_BaseComponents/ChangeBar'
import Course from '@/app/courses/[courseId]/_components/Course'
import { useRouter } from 'next/navigation'
import LoadingComponent from '@/app/_components/LoadingComponent'

type Props = {}

export default function page({ }: Props) {
    const Router = useRouter()
    const [loading, setLoading] = useState(false)
    const FetchPrivate = useFetchPrivate()
    const page = ["Basic Information", "Advanced Information", "Curriculum", "Publish Course"]
    const { formData, updateFormData, step, setStep } = useFormContext();
    const [categories, setCategories] = useState([])
    const endPoint = formData.type === "online" ? "courses/addOnlineCourse" : 'courses/addOfflineCourse'
    const getAllCategories = async () => {
        const getCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/categories`, { method: 'GET' })
        const data = await getCategories.json()
        const categories = data.map((category: any) => { return category.name })
        
        setCategories(categories)
    }
    useEffect(() => {
        getAllCategories()
    }, [])
    console.log(formData)

    const FormSelector = () => {
        switch (step) {
            case 0:
                return <BasicInformation categories={categories} />

            case 1:
                return <AdvancedInformation /> // Import and use the 'AdvancedInformation' component properly.

            case 2:
                return <Curriculum />
            /*
        case 3:
            return <PublishCourse/> */
            default:
                return <BasicInformation categories={getAllCategories()} />
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        if (formData.lesson&&formData.type==="online") {
            formData?.lesson.map((lesson: any) => {
                /* lesson.videoUrl = lesson.videoUrl.name */
                lesson.videoUrl.videoName = lesson?.videoUrl?.name
            })
            updateFormData(formData)
        }
        console.log('formdata in submit : ', formData)
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                if (Array.isArray(value)) {
                    data.append(key, JSON.stringify(value));
                } else {
                    data.append(key, value as string | Blob);
                }
            }
        });
        let product
        try {
            console.log('this formdata is  :', data)
            const res = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/${endPoint}`, {
                "method": "POST",
                "body": data,
            })
            const response = await res?.json()
            console.log(response)
            product = response
            

        }
        catch (err) {
            console.log(err)
        }
        try {
            console.log("ddddddddddddd" ,product)
            const options = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer test_sk_0ofp9nTLMQWqlHLFsHF3AGAmx3wQjVTKnFGpRHAT',
                    'Content-Type': 'application/json'
                },
                body: `{"name":"${product?._id}"}`
            };

            const response = fetch('https://pay.chargily.net/test/api/v2/products', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    return response
                })
                .catch(err => console.error(err));/*  */
            const responseResolved = await response
            console.log('response from chargily : ', responseResolved)
            const options1 = {
                method: "POST",
                headers: {
                    Authorization: "Bearer test_sk_0ofp9nTLMQWqlHLFsHF3AGAmx3wQjVTKnFGpRHAT",
                    "Content-Type": "application/json",
                },
                body: `{"amount":${formData.price},"currency":"dzd","product_id":"${responseResolved.id}"}`,
            };

            const response2 = fetch("https://pay.chargily.net/test/api/v2/prices", options1)
                .then((response) => response.json())
                .then((response) => {console.log(response)
                    return response
                })
                .catch((err) => console.error(err));
            const responseResolved2 = await response2
            console.log('response from chddddddddargily : ', responseResolved2.id)
            console.log("id 0000000000000 : ", product?._id)
            const res = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/price/${product?._id}`, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({ "priceId": responseResolved2.id }),
            })
            const res2 = await res?.json()
            console.log(res2)
            setLoading(false)
            Router.push('/profile/settings')
        }
        catch (err) {
            console.log(err)
        }


    }
    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container max-md:p-0  '>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  grid grid-flow-dense'>
                        <Navbar />
                        <div className='bg-white w-[80%] m-8 p-8 max-md:mx-auto'>
                            <form encType="multipart/form-data" action={`/addOnlineCourse`} method='POST' onSubmit={(e) => { handleSubmit(e) }}>

                                <div >
                                    <ChangeBar></ChangeBar>
                                    <div className='header font-semibold leading-4 my-2'>
                                        <h1 className='my-4 text-[20px] font-semibold'>{page[step]}</h1>
                                        <hr></hr>
                                    </div>
                                    {FormSelector()}
                                    {loading &&< LoadingComponent/>}

                                </div>
                                <div className='footer flex justify-between max-md:flex-col'>
                                    <button className='bg-[white] w-[90px] border' type='button' hidden={step === 0} onClick={() => setStep((currStep: number) => currStep - 1)}>
                                        <p className='my-1 text-[15px] text-[#6E7485] font-semibold'>
                                            Previous
                                        </p>
                                    </button>
                                    <button className='bg-[#00977D] w-[90px]' type='button' hidden={step === 2||formData.type!="online"&&step===1} onClick={() => setStep((currStep: number) => currStep + 1)} >
                                        <p className='my-1 text-[15px] text-white font-semibold'>
                                            Next
                                        </p>
                                    </button>
                                    <button className='bg-[#00977D] w-[90px]' type='submit' hidden={formData.type=="online"&&step !== 2||(formData.type!="online"&&step!=1)} >
                                        <p className='my-1 text-[15px] text-white font-semibold'>
                                            Save
                                        </p>
                                    </button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}