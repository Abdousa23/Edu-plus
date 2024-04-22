'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import BasicInformation from './components/basicInformation'
import Curriculum from './components/Curriculum'
import Styles from '../page.module.css'
import AdvancedInformation from './components/AdvancedInformation'
import useFormContext from './hooks/useFormContext'
type Props = {}


export default function page({ }: Props) {
    
    const page = ["Basic Information", "Advanced Information", "Curriculum", "Publish Course"]
    const { formData, updateFormData , step , setStep } = useFormContext();
    console.log(formData)
    useEffect(() => {
        updateFormData({
            type: 'Online',
            language: 'English',
            level: 'Beginner',
        });
    }, [])

    const FormSelector = () => {
        switch (step) {
            case 0:
                return <BasicInformation />

            case 1:
                return <AdvancedInformation /> // Import and use the 'AdvancedInformation' component properly.

            case 2:
                return <Curriculum/>
                /*
            case 3:
                return <PublishCourse/> */
            default:
                return <BasicInformation />
        }
    }
    return (
        <div /* className={Styles.form} */>
            <form onSubmit={(e)=>{e.preventDefault();console.log(e.target)}}>
            
            <div >
            <div className='header'>
                <h1>{page[step]}</h1>
            </div>
                {FormSelector()}
            </div>
            <div className='footer'>
                <button hidden={step===0} onClick={() => setStep((currStep: number) => currStep - 1)}>
                    prev
                </button>
                <button /* type='button' */ hidden={step===2} onClick={() => setStep((currStep: number) => currStep + 1)} >
                    Next
                </button>
                <button hidden={step!==2} >
                    save
                </button>


            </div>
            </form>
        </div>
    )
}