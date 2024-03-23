import React from 'react'
import Image from 'next/image'

export default function InstructorHeroStat() {
const student =2400
const instructor=26
const language= 4 
const successRate=88.9 
const trustedCompanies = 57 

return (
    <div className='flex justify-between gap-18 items-center my-48 mx-10'>
        <div className='flex justify-between  items-center'>
            <Image width={75} height={75} src="/users.png"  alt='student' />
            <div>
                <h1 className='text-6xl'>{student}</h1>
                <h1 className='text-3xl' >student </h1>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <Image width={75}  height={75} src="/Notebook.png" alt='instructor' />
            <div >
                <h1  className='text-6xl' >{instructor}</h1>
                <h1 className='text-3xl'>certified  Instructor </h1>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <Image width={75} height={75}  src="/GlobeHemisphereWest.png" alt='student'/>
            <div> 
                <h1  className='text-6xl'  >{language}</h1>
                <h1 className='text-3xl'>Country Language </h1>
            </div>
        </div>
        <div  className='flex justify-between items-center'>
            <Image width={75} height={75} src="/CircleWavyCheck.png"  alt='successRate'/>
            <div>
                <h1 className='text-6xl' >{successRate} %</h1>
                <h1 className='text-3xl'>success Rate </h1>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <Image width={75} height={75} src="/Stack.png"  alt='trustedCompanies'/>
            <div>
                <h1 className='text-6xl' >{trustedCompanies}</h1>
                <h1 className='text-3xl'>trusted Companies </h1>
            </div>
        </div>
        
    </div>
)
}
