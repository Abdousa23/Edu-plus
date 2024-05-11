import React from 'react'
import { FaStar } from 'react-icons/fa'

type Props = {
    length: number
    starWidth: number
}

const Rstar = ({length , starWidth}: Props) => {
    return (
        
        <div className='flex flex-row'>
{
            [...Array(length)].map((star : any) => {
                return (
                    <>
                        <FaStar style={{fontSize : starWidth+'px'}} className={`w-[20px] text-[#FD8E1F]`} />
                    </>
                )
            })}
            </div>
        )
        
        
}
    
export default Rstar