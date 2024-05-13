'use client'

import { createContext, useState, ReactNode } from "react";
import useFetchPrivate from "@/app/_hooks/useFetchPrivate";

type CartContextProps = {
    children: ReactNode,
}

export const CartContext = createContext<CartContextType>({
    cartCourses: [],
    setCartCourses: () => { },
    getCartCourses: () => Promise.resolve(),
    removeCourseFromCart: () => {},
    purchaseCourse: () => {},
  });
export const CartProvider = ({ children }:CartContextProps) => {


    const [cartCourses, setCartCourses] = useState<CourseType[]>([])

    
    const fetchPrivate = useFetchPrivate()

    const getCartCourses = async () => {
        try {
            const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
                method: 'GET'

            })
            const data = await response?.json()
            if (!response?.ok) {
                throw new Error(data.message)
            }
            setCartCourses(data?.courses)
        } catch (error) {
            console.log(error)
        }
    }

    const purchaseCourse = (course: CourseType) => {
        const body = `{"items":[{"price":"${course?.price}","quantity":1,"product_id":"${course?._id}"}],"success_url":"https://edu-plus-nine.vercel.app/"}`
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_apiPaymentSecretKey}`,
                "Content-Type": "application/json",
            },
            body: body,
        };
        console.log(body)
        fetch("https://pay.chargily.net/test/api/v2/checkouts", options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
    }
    const removeCourseFromCart = async (course: CourseType) => {
        try {
            const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/cart/remove/${course._id}`, {
                method: 'DELETE'
            })
            const data = await response?.json()
            if (!response?.ok) {
                throw new Error(data.message)
            }
            getCartCourses()
        } catch (error) {
            console.log(error)
        }
    }


    return <CartContext.Provider value={{ cartCourses, setCartCourses, getCartCourses, removeCourseFromCart, purchaseCourse }}>
        {children}
    </CartContext.Provider>;

}

export default CartProvider;