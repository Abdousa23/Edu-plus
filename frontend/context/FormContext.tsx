'use client'

import { useContext, createContext, Dispatch, SetStateAction, useState } from "react"

interface contextProps {
    formData: {
        title: string;
        type: string;
        category: string;
        topic: string;
        language: string;
        level: string;
        duration: string;
        thumbnail: any;
        description : string
    };
    setFormData: Dispatch<SetStateAction<{
        title: string;
        type: string;
        category: string;
        topic: string;
        language: string;
        level: string;
        duration: string;
        thumbnail: any;
        description : string
    }>>;
}

const FormContext = createContext<any>({});

export const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        category: '',
        topic: '',
        language: '',
        level: '',
        duration: '',
        thumbnail: null,
        description : '',
        lesson : [{id: 0, title: 'lesson title', description: '', videoUrl: null}]
    });
    const [lessonContent, setLessonContent] = useState<any>([
        {
            id: 0,
            title: 'lesson title',
            description: '',
            videoUrl: '',
            clicked : false,
            open : false,
            pop : false,
            pop1 : false,
        }
    ])
    const [step, setStep] = useState(0);
    const [maxLength, setMaxLength] = useState(0)
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    function updateFormData(newData: any) {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };
    

    return (

        <FormContext.Provider value={{ formData, setFormData, updateFormData, step, setStep, maxLength, setMaxLength, selectedImage, setSelectedImage , lessonContent , setLessonContent }}>
            {children}
        </FormContext.Provider>
    );
}

/* export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormContextProvider');
    }
    console.log(context)
    return context;
} */

export default FormContext;