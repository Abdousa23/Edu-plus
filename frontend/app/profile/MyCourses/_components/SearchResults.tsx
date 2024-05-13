'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import CourseCard from '@/app/_components/CourseCard';
import Footer from '@/app/_components/Footer';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';


type props = {   
        search: string

}

export default function SearchResults({search}: props) {
    const [courses, setCourses] = useState<any>([]);
    const [filteredList, setFilteredList] = useState<CourseType[]>([]);
    const [currentType, setCurrentType] = useState<string>('online');
    const [categories, setCategories] = useState<CategoryType[]>([]);
    let data1 : CourseType[]
    const [selectedValues, setSelectedValues] = useState({
        ratings: '',
        language: '',
        level: '',
        price: '',
        category: '',
        available: '',
    });
    const FetchPrivate = useFetchPrivate()

    const getAllCourses = async () => {
        try {
            const response = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/courses/all/student` , {"method" : "GET"})
            const data : CourseType[] = await response?.json();
            console.log('kkolkk',data)
            if (response?.status === 404) {
                setCourses([]);
            } else {
                setFilteredList(data.filter(data => data.type == 'online'));
                setCourses(data);
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCourses = async () => {
        console.log("courezdedfezf : "  )
        if(search!=''){
        const response = await FetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/home/student/${search}` , {"method" : "GET"})
        console.log("response" , response)
        const data: CourseType[] = await response?.json();
        console.log("data"  ,data)
        if (response?.status === 404) {
            setCourses([]);
        } else {
            setCourses(data);
            setFilteredList(data.filter(data => data.type == 'online'));
        }
    }
    }
    const getAllCategories = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/categories`)
        const data = await response?.json();
        if (response?.status === 404) {
            throw new Error('Not Found');
        }
        setCategories(data);
    }

    const handleTypeChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const typeMap: { [key: string]: string } = {
            'Online': 'online',
            'In-person': 'inperson'
        };
        const type = event.currentTarget.textContent || ''; // Ensure type is always a string
        const mappedType = typeMap[type] || '';
        setCurrentType(mappedType);
        setFilteredList(courses.filter((course:any) => course.type === mappedType));
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        setSelectedValues(prevValues => {
            const updatedValues = {
                ...prevValues,
                [name]: value,
            };

            const List = courses.filter((item:any) =>
                (updatedValues.ratings === '' || item.rating.toString() >= updatedValues.ratings) &&
                (updatedValues.language === '' || item.language === updatedValues.language) &&
                (updatedValues.level === '' || item.level === updatedValues.level) &&
                (updatedValues.price === '' || item.price.toString() + '$' === updatedValues.price) &&
                (updatedValues.category === '' || item.category === updatedValues.category) &&
                (updatedValues.available === '' || item.isAvailable.toString() === updatedValues.available)
            );
            // console.log(courses[0].category)
            setFilteredList(List);

            return updatedValues;
        });
    };
    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sort = event.currentTarget.value;
        let sortedList: CourseType[]; // Add type annotation

        if (sort === 'name') {
            sortedList = [...filteredList].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === 'Price') {
            sortedList = [...filteredList].sort((a, b) => a.price - b.price);
        } else if (sort === 'Rating') {
            sortedList = [...filteredList].sort((a, b) => a.rating - b.rating);
        }

        setFilteredList(sortedList!); // Add type assertion
    }
    

    useEffect(() => {
        getAllCategories();
        getCourses()
    }, [search])
    useEffect(() => {
        getAllCourses()

    }, [])
    useEffect(() => {
        console.log('kkkl',courses);
    }, [courses]);


    return (
        <>
            <div className='min-h-[90vh]'>
                <div className='container mx-auto mt-8'>
                    {
                        search?.length>0 &&
                        <>
                        <h1 className='font-semibold text-[40px]'>{courses.length} results for &ldquo; <span className='text-green+'>{search}</span>&ldquo;</h1>
                        
                    </>
                    }
                    <div className='flex justify-between mx-5 my-8'>
                        <ul className='flex gap-4 max-md:flex-col'>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="ratings" id="">
                                    <option value=""> ratings</option>
                                    <option value="4.5">
                                        4.5+
                                    </option>
                                    <option value="4">
                                        4+
                                    </option>
                                    <option value="3">
                                        3+
                                    </option>
                                </select>
                            </li>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="language" id="">
                                    <option value="">Language</option>
                                    <option value="English">English</option>
                                    <option value="Arabic">Arabic</option>
                                    <option value="French">French</option>
                                </select>
                            </li>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="level" id="">
                                    <option value="">Level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Pro">Pro</option>
                                </select>
                            </li>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="price" id="">
                                    <option value="">Price</option>
                                    <option value="">Payment</option>
                                    <option value="0">Free</option>
                                </select>
                            </li>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="category" id="">
                                    <option value="">categories</option>
                                    {
                                        categories.map((category: CategoryType) => {
                                            return <option key={category._id} value={category._id}>{category.name}</option>
                                        })
                                    }
                                </select>
                            </li>
                            <li className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm' >
                                <select onChange={handleSelectChange} name="available" id="">
                                    <option value="">all</option>
                                    <option value="true">Available</option>
                                </select>
                            </li>

                        </ul>
                        <div className='flex items-center px-3 space-x-2 w-fit h-10 bg-white border border-gray-300 rounded-sm'>
                            <select onChange={handleSort} name="sort" id="sort">
                                <option value="">Sort By </option>
                                <option value="name">name</option>
                                <option value="Price">Price</option>
                                <option value="Rating">Rating</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-around w-60 mx-4 my-8'>
                        <button onClick={handleTypeChange}
                            className={`${currentType === 'online' ? ' text-black' : 'text-[#737373]'} font-semibold text-[28px] mr-4'`}
                        >
                            Online
                        </button>
                        <button onClick={handleTypeChange}
                            className={`${currentType === 'inperson' ? ' text-black' : 'text-[#737373]'} font-semibold text-[28px] '`}
                        >
                            In-person
                        </button>
                    </div>
                    <div className="flex flex-wrap my-20">
                        {
                            filteredList.length > 0 ? filteredList.map((course: any) => {
                                return (
                                    <CourseCard key={course._id} course={course} />
                                )
                            }) : <h1>No courses available</h1>
                        }
                    </div>
                </div>
                {/* {typeof window !== 'undefined' && <Footer />} */}
            </div>

            <Footer />
        </>
    )
}

