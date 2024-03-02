import React from 'react'
import Image from 'next/image'

export default function HeroInstructor3() {
return (
    
        <div className='flex flex-col items-center gap-22 h-[100vh] w-full'>
            <div className='w-full flex justify-center'>
            <h1 className='text-6xl ' >
                How you will become a successful instructor
            </h1>
            </div>
        <div className='flex justify-between m-24 items-center '>
            
            <div className='flex flex-col justify-center gap-5  ' >
                
                    <Image src="/CheckCircle.png" alt='icon ' height={30} width={30}/>
                    <h1 className='text-4xl ' >1- applay to become instructor</h1>
                    <h1 className='text-2xl ' > Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</h1>
                
            </div>
            <div className='flex flex-col  justify-center gap-5' >
                
                <Image src="/CheckCircle.png" alt='icon ' height={30} width={30}/>
                <h1 className='text-3xl ' >1- applay to become instructor</h1>
                <h1 className='text-2xl ' > Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</h1>
            
            </div>

            <div className='flex flex-col justify-center gap-5' >
                
                <Image src="/CheckCircle.png" alt='icon' height={30} width={30}/>
                <h1 className='text-3xl ' >1- applay to become instructor</h1>
                <h1 className='text-2xl ' > Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</h1>
            
            </div>
            <div className='flex flex-col justify-center gap-5' >
                
                <Image src="/CheckCircle.png" alt='icon ' height={30} width={30}/>
                <h1 className='text-3xl ' >1- applay to become instructor</h1>
                <h1 className='text-2xl ' > Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</h1>
            </div>

        </div>
    </div>

)
}
