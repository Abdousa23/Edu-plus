import React from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function Resources({course}:course) {
    
  return (
    <div>
        <h1 className=' text-xl font-semibold'>Attach Files</h1>
        <div className='my-1 bg-gray-200 flex justify-between w-[90%]'>
            <div className='mx-4 my-4 flex justify-around'>
                <div className='text-neworg mx-4 '>
                <TextSnippetOutlinedIcon className='text-2xl' />
                </div>
                <div>
                    <h1>create acount.pdf</h1>
                    <p>12.8mb</p>
                </div>
            </div>
            <button className='w-fit text-white bg-neworg px-4 py-2 m-4 '>Download File</button>
        </div>
    </div>
  )
}
