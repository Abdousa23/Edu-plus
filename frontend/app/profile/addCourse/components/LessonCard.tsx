import React from 'react'
import { handleTitle , handleDeleteLesson } from './Handlers'
const LessonCard = ({ formData , setFormData, lessonContent , setLessonContent, item} : any) => {
    return (
        
            <div>
                            <h1 style={{ fontSize: "20px", padding: "10px 10px " }}>
                                {" "}
                                <input
                                    type="text"
                                    required
                                    defaultValue={"lesson title"}
                                    onChange={(e) => handleTitle(item.id, e,lessonContent , setLessonContent, formData , setFormData)}
                                ></input>
                            </h1>
                            <div
                                style={{
                                    width: "29%",
                                    alignContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <button
                                    onClick={() => {
                                        handleDeleteLesson(item.id,lessonContent , setLessonContent, formData , setFormData);
                                    }}
                                    style={{
                                        width: "21%",
                                        height: "34px",
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    X
                                </button>
                                </div>
        </div>
    )
}

export default LessonCard