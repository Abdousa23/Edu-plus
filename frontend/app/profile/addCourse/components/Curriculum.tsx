import React, { useEffect, useState } from "react";
import Styles from "../../page.module.css";
import useFormContext from "../hooks/useFormContext";
import { it } from "node:test";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import LessonCard from "./LessonCard";
import Modal from "./popUP";
import { reOrder, handleAddLesson, handleClose, handleDeleteLesson, handleLessonDescriptionChange, handlePop, handleTitle, handleVideoChange } from "./Handlers";

type Props = {};

export default function Curriculum() {
    const { lessonContent, setLessonContent, formData, setFormData } = useFormContext();

    return (
        <section
            className="mx-auto w-[95%] flex flex-col items-center"
        >
            <div className="bg-[#F5F7FA] flex flex-col items-center justify-center mx-auto my-4 w-full" >
                {console.log(lessonContent)}
                {lessonContent?.map((item: any) => {
                    return (
                        <div
                            key={item.id}
                            className="w-[80%] bg-white flex flex-row justify-between mx-10 my-8"
                            >
                            <Popover
                            >
                            <LessonCard lessonContent={lessonContent} setLessonContent={setLessonContent} formData={formData} setFormData={setFormData} item={item}></LessonCard>
                            


                                <PopoverContent
                                    className="w-1/2 h-1/6 bg-white rounded-md shadow-md p-20"
                                >
                                    <div className="w-[80px] mt-[-36px] flex flex-col items-center content-center justify-start h-[50px] gap-4 my-auto">
                                        <div className="mb-[41px] mr-8">
                                        <div
                                            onClick={() => handlePop(item.id, lessonContent, setLessonContent, formData, setFormData)}
                                            className="text-[#4E5566] cursor-pointer font-normal mr-12"
                                        >
                                            Attach video
                                        </div>
                                        <div
                                        className="text-[#4E5566] cursor-pointer font-normal mr-4"
                                            onClick={() => { item.pop1 = true, setLessonContent([...lessonContent]) }}
                                        >
                                            Add description
                                        </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            {!item.pop && (
                                <Modal open={item.open} onClose={() => { lessonContent[item.id].open = false, setLessonContent([...lessonContent]) }}>
                                    {console.log(item.id)}
                                    <div className="text-center  w-[648px]">
                                        <div
                                            className="mx-auto my-4 w-600 h-100 bg-white border border-gray-200 flex flex-col items-center p-6 gap-4"
                                        >
                                            <input
                                                type="file"
                                                id={item.id}
                                                name="video"
                                                accept="video/" 
                                                className="hidden"
                                                onChange={(e) => {
                                                    const id = item.id;
                                                    return handleVideoChange(id, e, lessonContent, setLessonContent, formData, setFormData);
                                                }}
                                            ></input>
                                            <label
                                                htmlFor={item.id}
                                                className="btn btn-light w-full cursor-pointer"
                                            >
                                                <h1 className="text-[#1D2026] font-bold">Attach video {item.id}</h1>
                                                <br></br>
                                                <div>
                                                    <p className="text-[#C4C4C4]">drag and drop a file or</p>
                                                    <p className="text-[#4E5566]">browse file</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                            type="button"
                                                className="btn btn-light w-full"
                                                onClick={() => { lessonContent[item.id].open = false, setLessonContent([...lessonContent]) }}
                                            >
                                                Cancel
                                            </button>
                                            {/* <button type="button" className="w-full h-14 bg-[#ECF9F5] text-[#00977D] font-bold cursor-pointer border-none">Delete</button> */}
                                        </div>
                                    </div>
                                </Modal>
                            )}
                            {(item.videoUrl) && (
                                <Modal open={item.pop} onClose={() => { item.pop = false, setLessonContent([...lessonContent]) }}>
                                    <div className="text-center  w-[648px]">
                                        <div
                                            className="mx-auto my-4 w-600 h-100 bg-white border border-gray-200 flex flex-row items-center p-6 gap-4"
                                        >
                                            {item.videoUrl instanceof File && <video className="w-[250px] h-[100px]" src={URL.createObjectURL(item.videoUrl)}></video>}
                                            <h1 className="text-[#1D2026] font-bold">{item.videoUrl.name} {item.id}</h1>
                                            <div>
                                                <input
                                                    type="file"
                                                    id={item.id}
                                                    name="video"
                                                    accept="video/"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const id = item.id;
                                                        return handleVideoChange(id, e, lessonContent, setLessonContent, formData, setFormData);
                                                    }}
                                                ></input>
                                                <label
                                                    htmlFor={item.id}
                                                    className="btn btn-light w-full cursor-pointer"
                                                >
                                                    <p className="text-[#C4C4C4]">change video</p>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                            type="button"
                                                className="btn btn-light w-full"
                                                onClick={() => handleClose(item.id, lessonContent, setLessonContent, formData, setFormData)}
                                            >
                                                Cancel
                                            </button>
                                            <button type="button" className="w-full h-14 bg-[#ECF9F5] text-[#00977D] font-bold cursor-pointer border-none" onClick={() => { lessonContent[item.id].open = false, item.pop = false, setLessonContent([...lessonContent]) }}>Done</button>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                            {(item.pop1) && (
                                <Modal open={item.pop1} onClose={() => { item.pop1 = false; setLessonContent([...lessonContent]) }}>
                                    <div className="text-center  w-[648px]">
                                        <div
                                            className="mx-auto my-4 w-600 h-100 bg-white border border-gray-200 flex flex-row items-center p-6 gap-4"
                                        >
                                            <div>
                                                <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Lesson description</label>
                                                <textarea
                                                    value={item.description}
                                                    onChange={(e) => handleLessonDescriptionChange(e, item.id, lessonContent, setLessonContent, formData, setFormData)}
                                                    className='w-full p-4 border border-gray-300 rounded-md text-lg resize-y min-h-64'
                                                    placeholder="Enter course description"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button type="button" className="w-full h-14 bg-[#ECF9F5] text-[#00977D] font-bold cursor-pointer border-none" onClick={() => { lessonContent[item.id].open = false, item.pop1 = false, setLessonContent([...lessonContent]) }}>Done</button>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    );
                })}
            </div>
            <button type="button"
                onClick={() => {
                    handleAddLesson(lessonContent, setLessonContent, formData, setFormData);
                }}
                className="w-full h-10 bg-[#E9F8F3] border-none text-[#00977D] font-semibold text-[14px] cursor-pointer my-8 mr-[10px]"
            >
                Add lecture
            </button>
        </section>
    );
}
