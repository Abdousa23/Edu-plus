import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import useFetchPrivate from '@/app/_hooks/useFetchPrivate';
type UserCard = {
  user: userType,
  removeData: (id: string) => void,
  onSelect: (item: userType, isSelected: boolean) => void
}

export default function UserCard({ user, removeData ,onSelect}: UserCard) {
  const fetchPrivate = useFetchPrivate()
  const handleDelete = async ()=>{
       const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/profile/${user._id}`,{
         method: 'DELETE'
       }
      )
       const data = await response?.json()
       console.log(data)
      removeData(user?._id)
  }
  return (
    <label htmlFor={`check${user._id}`}>
    <div className='flex w-full mx-auto items-center justify-between bg-white border-b-2 border-gray-300 py-2'>
      <div className='flex items-center max-w-48  gap-8 ml-2'>
        <input id={`check${user._id}`} type="checkbox"  onChange={(e) => onSelect(user, e.target.checked)} />
          <div className='flex items-center gap-2'>
            <div className='w-10 rounded-full overflow-hidden'>
              <img src={user?.pfp?.url||"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} className='max-w-full' alt="" />
            </div>
            <div>
              <h1 className='text-base font-medium'>{user.username}</h1>
              <p className='text-sm font-normal text-[#667085] max-md:hidden'>{user.email}</p>
            </div>
          </div>
      </div>
      <div className='max-md:hidden'>
            {user?.purshasedCourses?.length || user?.courses?.length}
          </div>
      <div className='mr-2'>
        <button onClick={handleDelete}><DeleteIcon /></button>
      </div>
    </div>
    </label>
  )
}
