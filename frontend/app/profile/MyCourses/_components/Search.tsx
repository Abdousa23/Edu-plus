import React, { useEffect, useState } from 'react'
import SearchResults from './SearchResults'
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'


type Props = {}


const Search = (props: Props) => {
    const FetchPrivate = useFetchPrivate()
    const [search, setSearch] = useState('' as string);
    const [searched , setSearched] = useState(false)
    const [courses, setCourses] = useState<CourseType[]>([]);
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        if(search!=""){
            setSearched(true)
        }
        if(search=="") setSearched(false)
    }


    

    return (
        <div>
            <div className='flex items-start'>
                <div className='flex justify-center items-center max-sm:hidden w-[40%]'>
                    <label htmlFor="search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <input type="text" id='search' value={search} onChange={handleSearchChange} className="flex flex-row items-center px-5 space-x-4.5 w-full h-10 bg-gray-100 rounded-full" placeholder="Search Your courses" />
                </div>
            </div>
            <SearchResults search={search}/>
        </div>
    )
}

export default Search