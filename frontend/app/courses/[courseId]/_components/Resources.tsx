import React, { useEffect } from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useState } from 'react';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import ErrorComponent from '@/app/_components/Error';
export default function Resources({ course }: course) {
  const [resources, setResources] = useState([])
  const [error, setError] = useState<ErrorProps>({ errmessage: '' });
  const fetchPrivate = useFetchPrivate()
  const getResources = async () => {
    try {
      const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/65cf6571a5ca4966a74d5cd1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          Credentials: 'include'
        })
      const data = await response?.json()
      if (!response?.ok) {
        throw new Error(data?.message || 'Something went wrong')
      }
      setResources(data.resources)
    } catch (error: any) {
      setResources([])
      setError({ errmessage: error.message })
    }
  }
  useEffect(() => {
    getResources()
  }, [])
  return (
    <div>
      <h1 className=' text-xl font-semibold'>Attach Files</h1>

      {
        error ? <ErrorComponent errmessage={error.errmessage} /> :
          resources.length > 0 ? resources.map((resource: any) => (
            <div className='my-1 bg-gray-200 flex justify-between w-[90%]'>
              <div className='mx-4 my-4 flex justify-around'>
                <div className='text-neworg mx-4 '>
                  <TextSnippetOutlinedIcon className='text-2xl' />
                </div>
                <div>
                  <h1>{resource.name}</h1>
                  <p>{resource.size}</p>
                </div>
              </div>

              <button className='w-fit text-white bg-neworg px-4 py-2 m-4 '>Download File</button>
            </div>
          )) : <h1>No resources available</h1>
      }
    </div>

  )
}
