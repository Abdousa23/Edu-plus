import StarsSharpIcon from '@mui/icons-material/StarsSharp';
import React from 'react'

type Props = {
    course : any
}
const Star = StarsSharpIcon
const YourBestCourses = ({course}: Props) => {
    return (
        <div className='flex flex-col content-center my-8'>
            <h1 className=' bold text-2xl my-8 '>Your best sales</h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 w-[350px]'>
                    {course.map((course : any) => {
                        return (
                            <div key={course._id} className='bg-[#ffffffb0] shadow-lg rounded-md p-6'>
                                <Star className='w-10 h-10 bg-[#f3f363] text-[#FFFFFF]'/>
                                <h1 className='font-bold text-2xl'>{course.title}</h1>
                                <p className='font-normal text-lg'>{course.description}</p>

                            </div>
                        )
                    
                    })}

            </div>
            
        </div>
    )
}

export default YourBestCourses