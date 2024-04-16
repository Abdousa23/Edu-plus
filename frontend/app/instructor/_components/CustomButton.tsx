"use client"

import React from 'react'
import Image from 'next/image'


export default function CustomButton({title, containerStyle,handleClick ,btnType}: CustomButtonProps) {
    return (
    <button
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
    >
    <span> 
    {title}
    </span>


    </button>
)

}
