import React from 'react';
import { UseGetTopCreators } from '../_adminHoc/UseGetTopCreators';

export default function TopCreators() {
  const topCreators = UseGetTopCreators();
  console.log('topCreators', topCreators);
  const data= topCreators.topCreators
  console.log('data', data);



  return (
    <div className='flex  flex-col  justify-between w-full p-5   bg-white   '>
      <h1 className='text-4xl font-700 p-5'>Top Creators</h1>
      <div className='hidden sm: flex justify-between p-5'>
        <p>Username</p>
        <p>Email</p>
        <p>Total Income</p>
      </div>
      <div className='flex flex-col gap justify-start    '>
        {data && data.map((creator: any, index: number) => {
          return (
            <div key={index} className='flex flex-col justify-between gap-10  text-xl    border-t border-solid border-gray-  border-t-2 p-5  sm:flex-row  items-center'>
              <div className='flex justify-start w-1/2'>
                <img src={creator.pfp?creator.pfp:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} alt='profile' className='w-10 h-10 rounded-full' />
                
              <p>{creator.username}</p>
              </div>
              <p className='text-gray-500 font-400   flex justify-start  w-full sm:1/2  sm: justify-start'>{creator.email}</p>
              <p className='text-[#333333] text-4xl font-800 flex  justify-center w-1/4 sm:justify-start'>{creator.totaolIncome}</p>
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
}
