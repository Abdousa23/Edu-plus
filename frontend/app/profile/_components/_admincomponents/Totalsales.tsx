"use client";
import React, { useEffect, useState } from 'react';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate'; 
import DataCube from './Datacube';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const GetTopSales = () => {
    const fetchprivet = useFetchPrivate();
    const [TotalSales, setTotalSales] = useState(null);
    const [TotalUsers, setTotalUsers] = useState(null);
    const [TotalCourses, setTotalCourses] = useState(null);
    const [NewUsersOfWeek, setNewUsersOfWeek] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const response1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalsales`, { method: 'GET' });
            const data1 = await response1?.json();
            setTotalSales(data1);
            console.log('data1', data1);

            const response2 = await fetchprivet(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalusers`, { method: 'GET' });
            const data2 = await response2?.json();
            setTotalUsers(data2);
            console.log('data2', data2);

            const response3 = await fetchprivet(`${process.env.NEXT_PUBLIC_API_URL}/admin/totalcourses`, { method: 'GET' });
            const data3 = await response3?.json();
            setTotalCourses(data3);
            console.log('data3', data3);
            const response4 = await fetchprivet(`${process.env.NEXT_PUBLIC_API_URL}/admin/newusersofweek`, { method: 'GET' });
            const data4 = await response4?.json();
            setNewUsersOfWeek(data4);
            console.log('data4', data4);

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
        <div className=' w-full h-[35vh]  flex-col flex  gap-5  justify-around py-[5vh] sm:flex-row'> 
{/* 

        <DataCube
    data={TotalSales?.totalSales}
    dataOf="$Total Sales"
    Icon={AttachMoneyIcon}
    colors={{ background: '', textColor: 'text-black' }}
/>

<DataCube
    data={TotalUsers?.totalUsers}
    dataOf="Total users"
    Icon={GroupIcon}
    colors={{ background: '', textColor: 'text-black' }}




/>
        <DataCube data={TotalCourses?.totalCourses} dataOf="Total Courses" Icon={AssessmentIcon} colors={{ background: '', textColor: 'text-black' } } />
        <DataCube data={NewUsersOfWeek?.newUsers} dataOf="new users of the week" Icon={PersonAddIcon} colors={{ background: '', textColor: 'text-black' } } /> */}

    </div>
    );
};


export default GetTopSales;






























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
