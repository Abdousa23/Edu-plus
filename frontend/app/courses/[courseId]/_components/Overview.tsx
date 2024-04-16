import React from 'react'
type course = {
    course?: CourseType
  }
export default function Overview({course}:course) {
  return (
    <div className='w-[90%] my-8 flex flex-col gap-20'>
    <div>
      <h1 className='text-[24px] font-medium'>Description</h1>
      <p className=' text-lg font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet alias maiores commodi beatae quod nobis deserunt quo quisquam quam perferendis? Neque, adipisci odit sequi tenetur commodi aspernatur earum fuga officia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime magnam, odio et corporis incidunt, in sed sunt hic impedit ea eum animi explicabo quibusdam nihil eius porro enim, ipsam quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem accusantium dolores doloremque harum et hic placeat. Voluptas modi praesentium blanditiis nostrum tempora porro illum consequatur dolor provident, ipsam et molestiae!</p>
    </div>
    <div>
        <h1 className='text-[24px] font-medium'>who is this course for</h1>
        <p className=' text-lg font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro, ullam tempora minus deserunt corporis perspiciatis itaque ratione ducimus id enim quae maxime aliquam, mollitia quisquam aliquid minima, reprehenderit voluptatem.</p>
    </div>
    </div>
  )
}
