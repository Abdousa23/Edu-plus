import React from 'react'
import { useState, useEffect } from 'react'
import useFormContext from '../hooks/useFormContext';


type Props = {}



export default function BasicInformation({ }: Props) {
    const { formData, updateFormData, maxLength, setMaxLength } = useFormContext();

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateFormData({

            type: event.target.value,
        });
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateFormData({
            language: event.target.value,
        });
    };

    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateFormData({
            level: event.target.value,
        });
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxLength(event.target.value.length)
        updateFormData({
            title: event.target.value,
        });
    }
    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            topic: event.target.value,
        });
    }
    return (
        <div className='flex flex-wrap w-full mx-auto'>
            <label>Title</label>
            <div className="grid grid-cols-2 items-center p-5
            ">
                <input value={formData.title} type='text' placeholder='Your course title' maxLength={80} required onChange={(e) => handleTitleChange(e)} />
                <div className='flex'>
                    <span > {maxLength.toString()}/80 </span>
                </div>
            </div>
            <label>Couse type</label>
            <select value={formData.type} onChange={(e) => handleTypeChange(e)}>
                <option value='Online'>Online</option>
                <option value='in person'>in person</option>
            </select>
            <label>Category</label>
            <select>
                <option>Category</option>
                <option>Development</option>
                <option>Business</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>IT & Software</option>
                <option>Personal Development</option>
                <option>Photography</option>
                <option>Music</option>
                <option>Health & Fitness</option>
                <option>Academics</option>
                <option>Language</option>
            </select>
            <label>Course topic</label>
            <input value={formData.topic} type='text' placeholder='Course topic' required onChange={handleTopicChange} />


            <div className=' w-full rounded-md flex items-center justify-space-around p-5 px-10' >
                <label>course Language</label>
                <select value={formData.language} onChange={(e) => handleLanguageChange(e)}>
                    <option value='English'>English</option>
                    <option value='Arabic'>Arabic</option>
                    <option value='French'>French</option>
                </select>
                <label>course level</label>
                <select value={formData.level} onChange={(e) => handleLevelChange(e)}>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Advanced'>Advanced</option>
                </select>
                <div className='flex items-safe w-full'>
                    <label>duration </label>
                    <input type="text" placeholder="Enter duration" />
                    <select className="course-day">
                        <option value="minutes">minutes</option>
                        <option value="Hours">Hours</option>

                    </select>
                </div>
            </div>


        </div >
    )
} 