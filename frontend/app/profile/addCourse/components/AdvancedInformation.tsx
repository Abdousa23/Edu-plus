
import React, { useState } from 'react'
import useFormContext from '../hooks/useFormContext';
import AdvancedInfo from './_AdvancedComponents/AdvancedInfo';
import { Wilayas } from './_AdvancedComponents/Wilayas';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export function BasicDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="Basic date picker" />
            </DemoContainer>
        </LocalizationProvider>
    );
}


interface ImageProps {
    selectedImage: File | null;
}



export default function AdvancedInformation() {
    const { formData, updateFormData, /* selectedImage, setSelectedImage */ } = useFormContext();
    const today = dayjs()
    const [wilaya , setWilaya] = useState(Wilayas[15])
    const [adress , setAdress] = useState("")
    const handleAdressChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
        setAdress(e.target.value)
        const location = "Algeria " + wilaya + " " + adress
        formData.location = location
        updateFormData(formData)
    }

    const handleWilayaChange = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setWilaya(e.target.value)
        const location = "Algeria " + wilaya + " " + adress
        updateFormData({
            location : location
        })
    }

    const handleDateChanger = (e : any )=>{  
        updateFormData({
            date : e.toISOString()
        })
    }

    const handleSeatsChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        updateFormData({
            availableSeats : e.target.value
        })
    }

    const typeHandler = () => {
        if (formData?.type == "online") {
            return (
                <AdvancedInfo />
            )
        } else {
            return (
                <>
                    <div className='grid grid-rows-2 grid-cols-2 gap-4 justify-between content-center items-center my-2 max-md:flex max-md:flex-col '>
                        <div>
                            <label htmlFor="adress" className="block font-sans text-[12px] mb-1">
                                Adress
                            </label>
                            <div className='flex justify-between content-center items-center'>
                                <input
                                    id="adress"
                                    value={adress}
                                    type="text"
                                    placeholder="Course full adress"
                                    maxLength={80}
                                    required
                                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                                    onChange={(e)=>handleAdressChange(e)}
                                />

                            </div>
                        </div>

                        <div className='flex flex-col justify-around'>
                            <label htmlFor="category" className="block font-sans text-[12px] mb-1">
                                Wilaya
                            </label>
                            <select
                                id="category"
                                className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                                value={wilaya}
                                onChange={(e)=>handleWilayaChange(e)}
                            >
                                {Wilayas.map((wilaya: any) => (
                                    <option key={wilaya} value={wilaya}>
                                        {wilaya}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div className='flex flex-col justify-around'>
                        <label htmlFor="Basic date picker" className="block font-sans text-[12px]">
                                Start
                            </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label="Basic date picker"  minDate={today} onChange={handleDateChanger}/>
                        </LocalizationProvider>
                        </div>
                        <div>

            <div>
                            <label htmlFor="Availabe seats" className="block font-sans text-[12px] mb-1">
                                Available seats
                            </label>
                            <div className='flex justify-between content-center items-center'>
                                <input
                                    id="Availabe seats"
                                    value={formData.availableSeats}
                                    type="text"
                                    placeholder="Enter the availabe seats number"
                                    maxLength={80}
                                    required
                                    className="w-full  border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-[#abe2d0]"
                                    onChange={(e)=>handleSeatsChange(e)}
                                />

                            </div>
                        </div>
                        </div>
                        </div>
                    <AdvancedInfo />
                </>
            )
        }
    }

    return (
        <>
            {typeHandler()}
        </>
    );
    ;

}