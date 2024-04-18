import Chats from './Chats'
import React from 'react'
import SearchInput from './SearchInput'

export default function SideBarMessages() {
  return (
    <div className='bg-red-500 w-[15vw] h-[95vh]'>
        <p>Chat</p>
        <SearchInput/>
        <Chats/>
    </div>
  )
}
