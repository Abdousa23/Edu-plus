import useFetchPrivate from "@/app/_hooks/useFetchPrivate";

import React, { use, useEffect } from 'react'

const getAllCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/categories/` , {method: 'GET'})    
        const data = await res?.json()
        return data
    } catch (err) {
        console.log(err)
    }
} 

export default getAllCategories