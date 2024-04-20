import React from 'react';
import { useState, useEffect } from 'react';
import useFormContext from '../hooks/useFormContext';
import getAllCategories from '@/lib/getAllCategories';
type Props = {};

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

    const handleTitleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxLength(event.target.value.length);
        updateFormData({
            title: event.target.value,
        });
        const data = await getAllCategories()
        console.log(data)
    };

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            topic: event.target.value,
        });
    };


    return (
        <div className="flex flex-wrap w-full mb-20 justify-between">
            <label htmlFor="title" className="block font-bold mb-1">
                Title
            </label>
            <div className="grid grid-cols-2 items-center p-2">
                <input
                    id="title"
                    value={formData.title}
                    type="text"
                    placeholder="Your course title"
                    maxLength={80}
                    required
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => handleTitleChange(e)}
                />
                <div className="flex justify-end">
                    <span className="text-gray-500 text-sm">
                        {maxLength}/{80}
                    </span>
                </div>
            </div>
        <div>
            <label htmlFor="type" className="block font-bold mb-1">
                Course Type
            </label>
            <select
                id="type"
                value={formData.type}
                onChange={(e) => handleTypeChange(e)}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="Online">Online</option>
                <option value="in person">In Person</option>
            </select>
            </div>
        <div>
            <label htmlFor="category" className="block font-bold mb-1">
                Category
            </label>
            <select
                id="category"
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
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
            </div>
            <br/>
            <div>
            <label htmlFor="topic" className="block font-bold mb-1">
                Course Topic
            </label>
            <input
                id="topic"
                value={formData.topic}
                type="text"
                placeholder="Course topic"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleTopicChange}
            />
            </div>

            <div className="flex flex-wrap w-full mb-6">
                <label htmlFor="language" className="block font-bold mb-1 w-        1/2">
                    Course Language
                </label>
                <select
                    id="language"
                    value={formData.language}
                    onChange={(e) => handleLanguageChange(e)}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="French">French</option>
                </select>

                <label htmlFor="level" className="block font-bold mb-1 w-1/2">
                    Course Level
                </label>
                <select
                    id="level"
                    value={formData.level}
                    onChange={(e) => handleLevelChange(e)}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="flex flex-wrap w-full">
                <label htmlFor="duration" className="block font-bold mb-1 w-1/2">
                    Duration
                </label>
                <div className="flex w-full">
                    <input
                        id="duration"
                        type="text"
                        placeholder="Enter duration"
                        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select
                        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-2"
                    >
                        <option value="minutes">Minutes</option>
                        <option value="Hours">Hours</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

