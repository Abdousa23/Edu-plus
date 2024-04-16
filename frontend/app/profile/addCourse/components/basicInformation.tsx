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
        <div style={{
            display: 'flex', /* Arrange form elements horizontally */
            flexWrap: 'wrap', /* Allow elements to wrap on smaller screens */
            width: '100%', /* Make the form fill the available space */
            margin: '20px auto', /* Add some margin for better spacing */
        }}>
            <label>Title</label>
            <div style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '2fr auto', /* Define two columns */
                alignItems: 'center', /* Vertically align elements */
                padding: '5px', /* Add some padding */
            }}>
                <input value={formData.title} type='text' placeholder='Your course title' maxLength={80} required onChange={(e) => handleTitleChange(e)} />
                <div style={{ display: "flex" }}>
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


            <div style={{
                width: '100%',
                borderRadius: '4px', /* Rounded corners */
                display: 'flex', /* Arrange elements side-by-side */
                alignItems: 'center', /* Vertically align elements */
                justifyContent: 'space-around',
                padding: '5px 10px', /* Add some padding */
            }}>
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
                <div style={{
                    display: "flex", /* Arrange input and select side-by-side */
                    alignItems: "safe",
                    width: "100%",
                }}>
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