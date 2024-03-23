import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
export default function SearchSection() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const searchCourses = async (search: string) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/search/${search}`)
      const data = await response.json();

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        searchCourses(search)
        setSearch('')
        router.push(`/home/${search}`)
    }
  return (
    <section className='back h-80 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-center font-bold text-4xl text-white w-1/2 mx-auto max-md:text-2xl '>Search Among <span className='text-org'>60000</span> Courses And Find Your Favourite Course</h1>
      <div className='w-[70%] max-md:w-[100%] flex items-center max-md:flex-col gap-5'>
        <form className='bg-white rounded-xl w-[70%] max-md:w-[90%] mx-auto flex  justify-between px-4' onSubmit={handleSubmit}>
            <div className='text-white bg-black h-10 rounded-lg my-2 w-32 flex justify-center items-center'>Categories</div>
          <input type="text" placeholder='Search for courses' onChange={handleChange} value={search} className='rounded-xl w-[70%]' />
            <button type='submit' className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </button>
        </form>
        <p className=' font-medium text-base text-[#ffffff] flex-1'>or view The Following Courses ...</p>
      </div>
    </section>
  )
}
