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
type Props = {}


export default function page({ }: Props) {
    const FetchPrivate = useFetchPrivate()
    const page = ["Basic Information", "Advanced Information", "Curriculum", "Publish Course"]
    const { formData, updateFormData, step, setStep } = useFormContext();
    const [categories, setCategories] = useState([])
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
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(formData.lesson){
            formData?.lesson.map((lesson: any) => {
                /* lesson.videoUrl = lesson.videoUrl.name */
                lesson.videoUrl.videoName = lesson.videoUrl.name
            })
            updateFormData(formData)
        }
        console.log('formdata in submit : ' , formData)
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
        try {
            console.log('this formdata is  :'  ,  data)
            const res = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/addOnlineCourse`, {
                "method" : "POST",
                "body" : data,
            })
            const response = await res?.json()
            console.log(response)

                alert('Course added successfully')
        
            }
        catch(err) {
            console.log(err)
        }
        

    }
    return (
        <div className='flex bg-[#E9EAF0]'>
            <Sidebar />
            <div className='flex container mx-auto'>
                <div className='flex-grow'>
                    <div className=' text-[#1d2026]  grid grid-flow-dense'>
                        <Navbar />
                        <div className='bg-white w-[80%] m-8 p-8'>
                            <form encType="multipart/form-data" action={`/addOnlineCourse`} method='POST' onSubmit={(e) => {handleSubmit(e) }}>

                                <div >
                                <ChangeBar></ChangeBar>
                                    <div className='header font-semibold leading-4 my-2'>
                                        <h1 className='my-4 text-[20px] font-semibold'>{page[step]}</h1>
                                        <hr></hr>
                                    </div>
                                    {FormSelector()}

                                </div>
                                <div className='footer flex justify-between'>
                                    <button className='bg-[white] w-[90px] border' hidden={step === 0} onClick={() => setStep((currStep: number) => currStep - 1)}>
                                    <p className='my-1 text-[15px] text-[#6E7485] font-semibold'>
                                        Previous
                                        </p>
                                    </button>
                                    <button className='bg-[#00977D] w-[90px]' type='button' hidden={step === 2} onClick={() => setStep((currStep: number) => currStep + 1)} >
                                        <p className='my-1 text-[15px] text-white font-semibold'>
                                        Next
                                        </p>
                                    </button>
                                    <button className='bg-[#00977D] w-[90px]' type='submit' hidden={step !== 2} >
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