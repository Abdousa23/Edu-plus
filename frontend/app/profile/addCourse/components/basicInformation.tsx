import React from 'react'
import { useState, useEffect } from 'react'
import useFormContext from '../hooks/useFormContext';
import getAllCategories from '@/lib/getAllCategories';

type Props = {
    categories: any
};

export default function BasicInformation({ categories }: Props) {

    const { formData, updateFormData, maxLength, setMaxLength } = useFormContext();
    const [time, setTime] = useState('Minutes')
    const [duration, setDuration] = useState<string>('0')

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateFormData({
            
            type: event.target.value,
        });
    };
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            price: event.target.value,
        });
    }

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
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateFormData({
            category: event.target.value,
        });
    };
    const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>, time: string) => {
        setDuration(event.target.value);
        if (duration) {
            {
                updateFormData({
                    duration: event.target.value.toString() + ' ' + time,
                });
            }
        } else {
            updateFormData({
                duration: ''
            });
        }
    }
    return (
        <div className="flex flex-wrap w-full mb-20 justify-between">
            <div className='flex flex-col justify-around w-[100%] my-1'>
                <label htmlFor="title" className="block font-sans text-[12px] mb-1">
                    Title
                </label>
                <div className='flex justify-between content-center items-center'>
                    <input
                        id="title"
                        value={formData.title}
                        type="text"
                        placeholder="Your course title"
                        maxLength={80}
                        required
                        className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                        onChange={(e) => handleTitleChange(e)}
                    />


                    <span className="text-gray-500 text-sm">
                        {maxLength}/{80}
                    </span>

                </div>
            </div>

            <div className='flex flex-col justify-around w-[51%] my-1'>
                <label htmlFor="type" className="block font-sans text-[12px] mb-1">
                    Course Type
                </label>
                <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleTypeChange(e)}
                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                >
                    <option value="online">Online</option>
                    <option value="inperson">In Person</option>
                </select>
            </div>
            <div className='flex flex-col my-auto justify-between content-center'>
                <label htmlFor="price" className="block font-sans text-[12px] mb-1">
                    Price
                </label>
                <input
                    value={formData.price}
                    type='number'
                    placeholder='Price'
                    required
                    className='w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]'
                    onChange={(e) => handlePriceChange(e)}
                />
            </div>
            <div className='flex flex-col justify-around w-[51%] my-1'>
                <label htmlFor="category" className="block font-sans text-[12px] mb-1">
                    Category
                </label>
                <select
                    id="category"
                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                    value={formData.category}
                    onChange={(e) => handleCategoryChange(e)}
                >
                    {categories.map((category: any) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}

                </select>
            </div>
            {<br />}
            <div className='flex flex-col justify-around w-[100%] my-2'>
                <label htmlFor="topic" className="block font-sans text-[12px] mb-1">
                    Course Topic
                </label>
                <input
                    id="topic"
                    value={formData.topic}
                    type="text"
                    placeholder="What is primarily taught in your course?"
                    required
                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                    onChange={handleTopicChange}
                />
            </div>


            
            <div className="flex flex-row w-full mb-6 justify-between content-center max-md:flex-wrap">
                <div className='flex flex-col justify-around w-1/4'>
                <label htmlFor="language" className="block font-sans text-[12px] mb-1">
                    Course Language
                </label>
                <select
                    id="language"
                    value={formData.language}
                    onChange={(e) => handleLanguageChange(e)}
                    className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                >
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="French">French</option>
                </select>
                </div>
                <div className='flex flex-col justify-around w-1/4'>
                <label htmlFor="level" className="block font-sans text-[12px] mb-1">
                    Course Level
                </label>
                <select
                    id="level"
                    value={formData.level}
                    onChange={(e) => handleLevelChange(e)}
                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                </div>
            <div className="flex flex-wrap w-1/4">
            <label htmlFor="duration" className="block font-sans text-[12px] mb-1 w-1/2">
                    Duration
                </label>
                <div className="flex flex-row max-md:flex-col">
                    <input
                        id="duration"
                        type="number"
                        value={duration}
                        onChange={(e) => { handleDurationChange(e, time) }}
                        placeholder="Enter duration"
                        className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0] border-r-0"
                    />
                    <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className=" border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0] border-l-0"
                    >
                        <option value="minutes">Minutes</option>
                        <option value="Hours">Hours</option>

                    </select>
                </div>
            </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const categories = await getAllCategories();
    return {
        props: {
            categories,
        },
    };
}