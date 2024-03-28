import React, { useEffect } from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useState } from 'react';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
import ErrorComponent from '@/app/_components/Error';
export default function Resources({ course }: course) {
  const [ressources, setRessources] = useState<ressource[]>([])
  const [error, setError] = useState<ErrorProps>({ errmessage: '' });
  const fetchPrivate = useFetchPrivate()
  const getRessources = async () => {
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
      setRessources(data.ressources)
    } catch (error: any) {
      setRessources([])
      setError({ errmessage: error.message })
    }
  }
  useEffect(() => {
    getRessources()
  }, [])
  const handleDownload = (url:string) => {
    try {
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop() || 'file';
        const aTag = document.createElement('a');
        aTag.href = blobUrl;
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
    } catch (error:any) {
      console.log(error.message)
    }
  }
  
  return (
    <div>
      <h1 className=' text-xl font-semibold'>Attach Files</h1>

      {
        error ? <ErrorComponent errmessage={error.errmessage} /> :
          ressources.length > 0 ? ressources.map((ressource: any) => (
            <div className='my-1 bg-gray-200 flex justify-between w-[90%]'>
              <div className='mx-4 my-4 flex justify-around'>
                <div className='text-neworg mx-4 '>
                  <TextSnippetOutlinedIcon className='text-2xl' />
                </div>
                <div>
                  <h1>{ressource.name}</h1>
                  <p>{ressource.size}</p>
                </div>
              </div>

              <button onClick={()=>handleDownload(ressource.ressourceUrl)} className='w-fit text-white bg-neworg px-4 py-2 m-4 '>Download File</button>
            </div>
          )) : <div>No ressources available</div>
      }
    </div>

  )
}
