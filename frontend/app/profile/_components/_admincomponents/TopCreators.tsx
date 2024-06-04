import React from 'react';
import { UseGetTopCreators } from '../_adminHoc/UseGetTopCreators';

export default function TopCreators() {
  const topCreators = UseGetTopCreators();
  console.log('topCreators', topCreators);
  const data= topCreators.topCreators
  console.log('data', data);



  return (
    <div className='flex  flex-col justify-between w-full p-5 bg-white rounded-3xl shadow-[-1px_2px_4px_rgba(0,0,0,0.11)] '>
      <h1 className='text-4xl font-bold font-700 p-5 '>Top Creators</h1>
      <div className='hidden sm:flex justify-between p-5'>
        <p className='text-[#A3AED0]'>Username</p>
        <p className='text-[#A3AED0]'>Email</p>
        <p className='text-[#A3AED0]'>Total Income</p>
      </div>
      <div className='flex flex-col gap justify-start    '>
        {data && data.map((creator: any, index: number) => {
          return (
            <div key={index} className='flex flex-col justify-between gap-10 text-xl border-solid border-gray- border-t-2 p-5  sm:flex-row  items-center'>
              <div className='flex justify-around w-1/2'>
                <img src={creator.pfp.url?creator.pfp.url:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} alt='profile' className='w-10 h-10 rounded-full' />
                
              <p>{creator.username}</p>
              </div>
              <p className='text-gray-500 font-400 flex justify-start  w-full sm:1/2  sm:justify-start'>{creator.email}</p>
              <p className='text-[#0BB783] text-xl font-bold flex  justify-center w-1/4 sm:justify-start'>{creator.totaolIncome}DZD</p>
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
}
