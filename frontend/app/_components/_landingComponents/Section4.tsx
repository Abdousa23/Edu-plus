import CategoryCard from './CategoryCard'
import React from 'react'
import { useState } from 'react';

export default function Section4() {
  const [selectedCard, setSelectedCard] = useState(-1);
  const handleClick = (index: number) => {
    setSelectedCard(index);
  };
  const Categories = ['Design','Development','Marketing','Business','IT & Software','Photography','Music','Health & Fitness','Lifestyle','Language','Teaching','Data Science','Finance']

  return (
    <section className='container mx-auto my-32'>
      <div>
        <h1 className='font-semibold text-[40px] max-md:text-center'>Most <span className='text-green+'>Popular Categories</span></h1>
        <p className='font-regular text-xl text-[#6d737a] max-md:text-center'>Various versions have evolved over the years, sometimes by accident.</p>
      </div>
      <div className=" grid grid-cols-3 gap-11 max-md:grid-cols-1 max-md:px-4 mt-10">
      {[...Array(12)].map((_, index) => (
        <CategoryCard 
          category={`${Categories[index + 1]}`}
          key={index}
          isInverted={selectedCard === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
    </section>
  )
}
