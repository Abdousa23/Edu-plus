import Chats from './Chats'
import React from 'react'
import SearchInput from './SearchInput'

export default function SideBarMessages() {
  return (
    <div className=' w-[25vw] h-[95vh]  o '>
        <p className='flex justify-center font-[500] text-xl'>Chat</p>
        <SearchInput/>
        <Chats/>
    </div>
  )
}
