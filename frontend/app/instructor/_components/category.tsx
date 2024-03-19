import React from 'react'
import Image from 'next/image'

export default function category(category:string) {
  return (
    <div>
        <button className="btn btn-outline btn-secondary">
            <h1>{category}</h1>
        </button>
    </div>
  )
}
