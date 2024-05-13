import Chats from './Chats'
import React, { useEffect } from 'react'
import SearchInput from './SearchInput'


export default function SideBarMessages() {
  return (
    <div className=' bg-white rounded-[8px] max-md:overflow-y-hidden overflow-x-auto border my-4 max-md:my-1 max-h-[100vh]'>
        <p className=' max-md:hidden font-[500] text-2xl py-5 ml-4'>Chat</p>
        <div className='w-full mx-auto'>
        <SearchInput/>
        <Chats />
        </div>
    </div>
  )
}
