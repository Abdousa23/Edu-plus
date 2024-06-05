"use client";
import React, { useEffect, useState } from 'react';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'; 
import DataCube from './Datacube';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { getCourses } from '@/lib/getCourses';
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { PiBooksBold } from "react-icons/pi";



const TotalSales = () => {
    const fetchPrivate = useFetchPrivate();
    const [TotalSales, setTotalSales] = useState<any>(null);
    const [TotalUsers, setTotalUsers] = useState<any>(null);
    const [TotalCourses, setTotalCourses] = useState<any>(null);
    const [NewUsersOfWeek, setNewUsersOfWeek] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);
    const [error, setError] = useState<any>(null);
    const [courseNb , setCoursesNb] = useState<number>(0)
    const fetchData = async () => {
        try {

            const response1 = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalsales`, { method: 'GET' });
            const data1 = await response1?.json();
            setTotalSales(data1);
            console.log('data1', data1);

            const response2 = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalusers`, { method: 'GET' });
            const data2 = await response2?.json();
            setTotalUsers(data2);
            console.log('data2', data2);

            const response3 = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalcourses`, { method: 'GET' });
            const data3 = await response3?.json();
            setTotalCourses(data3);
            console.log('data3', data3);
            const response4 = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/admin/newusersofweek`, { method: 'GET' });
            const data4 = await response4?.json();
            setNewUsersOfWeek(data4);
            console.log('data4', data4);
            const courses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/all` , {
                "method" : "GET"
            })
            const res = await courses?.json()
            console.log("courses : ", res)
            setCoursesNb(res.length)

            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);





    return (
        <div className=' w-full   flex-col flex  gap-[2vw]  justify-around py-[5vh] sm:flex-row  items-center'> 
        <DataCube 
    data={TotalSales?.totalSales +" DZD"}
    dataOf="Total Sales"
    Icon={HiCurrencyDollar}
    iconColor='text-[#FA5A7D]'
    colors={{ background: '#FFE2E5', textColor: '#151D48' }}
/>

<DataCube
    data={TotalUsers?.totalUsers}
    dataOf="Total users"
    Icon={FaCircleUser }
    iconColor='text-[#FF947A]'
    colors={{ background: '#FFF4DE', textColor: '#151D48' }}




/>
        <DataCube iconColor='text-[#3CD856]' data={courseNb} dataOf="Total Courses" Icon={PiBooksBold} colors={{ background: '#DCFCE7', textColor: '#151D48' } } />
        <DataCube iconColor='' data={NewUsersOfWeek?.newUsers} dataOf="new users of the week" Icon={PersonAddIcon} colors={{ background: '#F3E8FF', textColor: '#151D48' } } />

    </div>
    );
};


export default TotalSales;






























{/*import React from 'react'
import DataCube from './Datacube'
import { GetTopSales } from '../_adminHoc/getTopSales'


export default function Totalsales() {

    const {TotalUsers , TotalSales , TotalCourses , NewUsersOfWeek}= GetTopSales()
    console.log('TotalUsers',TotalUsers)
    console.log('TotalSales',TotalSales)
    console.log('TotalCourses',TotalCourses)
    console.log('NewUsersOfWeek',NewUsersOfWeek)
  return (
    <div className='w-full'>
     <h1> today s sales </h1>
     <h1>sales sumery </h1>
     {/* <DataCube/>
     <DataCube/>
     <DataCube/>
     <DataCube/> }

     
    </div>
  )
} */ }
