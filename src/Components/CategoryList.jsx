import React, { useEffect, useState } from 'react'
import Footer from './Layout/Footer'


const Categories = () => {

  return (
    <div className='  h-[780px] w-full pt-8 md:pt-16 '>
                 <div className='flex justify-between'>
         <h1 className='pb-8 w-3/4 mx-auto text-cor3 text-center text-[20px] md:text-[40px] font-bold'> Recommendations </h1>
         <p className='hidden md:block pb-8 w-3/4 mx-auto text-cor3 text-center text-[16]'> [...] </p>
                 </div>
       <div className='grid grid-cols-2 '>
          {/*  TODO : putting every image/category manually for now, need to ask the client if she is going to pay or not for deploy */}
          {/* 
          {categories.map((category)=>(
            <div key={category.id} className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[400px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2
            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>{category.name}</p>
            </div>)
          )} 
           */}
            <div className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[200px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2
            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>SkinCare</p>
            </div>
                 <div className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[200px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2
            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>Drink/Snack</p>
            </div>
                 <div className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[200px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2
            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>Colectibles</p>
            </div>
                 <div className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[200px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2
            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>Fashion</p>
            </div>

       </div>
       <Footer />
    </div>
  )
}

export default Categories
