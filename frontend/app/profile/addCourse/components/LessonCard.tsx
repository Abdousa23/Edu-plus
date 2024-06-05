import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { BsList } from "react-icons/bs";
import React from 'react'
import { BiTrash } from "react-icons/bi";
import { handleTitle, handleDeleteLesson } from './Handlers'
const LessonCard = ({ formData, setFormData, lessonContent, setLessonContent, item }: any) => {
    return (

        <div className='flex flex-row  justify-between items-start my-4 w-full mx-4 max-sm:flex-col max-sm:gap-4'>
            <div className="flex content-center items-center gap-2">
                <BsList className='text-[#6E7485]' />
                <input
                    type="text"
                    required
                    placeholder="Lesson title"
                    className='my-auto max-md:w-[50%]'
                    onChange={(e) => handleTitle(item.id, e, lessonContent, setLessonContent, formData, setFormData)}
                ></input>
                </div>
            <div
                className="flex flex-row gap-2 content-start items-start ml-auto"
            >
                <PopoverTrigger>
                    <div
                        className="w-[100px] bg-[#c3e6db] text-[#00977D] font-semibold"
                    >
                        Contents
                    </div>
                </PopoverTrigger>
                <BiTrash
                    onClick={() => {
                        handleDeleteLesson(item.id, lessonContent, setLessonContent, formData, setFormData);
                    }}
                    className="text-[#E34444] cursor-pointer"
                >
                    X
                </BiTrash>
            </div>
        </div>
    )
}

export default LessonCard