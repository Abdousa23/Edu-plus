import React, { useEffect } from 'react' /* parfait */
import CartCourseCard from './CartCourseCard'
import { useContext } from 'react'
import { CartContext } from '@/context/cartContext'

export default function CartContent() {
    const {cartCourses,setCartCourses,getCartCourses} = useContext(CartContext)
    useEffect(() => {
        getCartCourses()
    }, [])
  return (
    <div className='w-[90%] mx-auto bg-white rounded-lg'>
      <div className={`flex w-[85%] mx-auto justify-between ${cartCourses.length>0? 'border-b-2 border-[#E9EAF0]':''} `}> 
        <h1>Course</h1>
        <h1 className='ml-20 max-md:hidden'>Prices</h1>
        <h1>Action</h1>
      </div>
      {
            cartCourses.length > 0 ?
            cartCourses.map((course) => (
                <CartCourseCard key={course._id} {...course} />
            ))
            : <div className='flex justify-center items-center h-12 w-full'>
                <p>your cart is empty</p>
                <br />
                <p>Please add courses to your cart to view them</p>
            </div>
      }
      
    </div>
  )
}
