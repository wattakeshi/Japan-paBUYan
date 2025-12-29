import React from 'react'

const Search = () => {
  return (

     <div className=' flex flex-col items-center w-full max-w-lg mx-auto bg-transparent 
                      rounded-full '>
                <p className='pt-4 w-4/5  font-bold mx-auto text-cor5 text-center text-[16px]'>Product</p>
             
      <input
        type="text"
        placeholder="Product name" required
        className=" p-4 text-cor5 placeholder-cor5 text-center 
                   bg-cor3 border rounded-full  border-cor1"/>
              
                
                <p className='pt-4 w-4/5  font-bold mx-auto text-cor5 text-center text-[16px]'>Details</p>                
      <input
        type="text"
        placeholder="Color/Size/Flavor"
        className=" p-4 text-cor5 placeholder-cor5 text-center 
                   bg-cor3 border rounded-full  border-cor1"/>

                <p className='pt-4 w-4/5  font-bold mx-auto text-cor5 text-center text-[16px]'>Quanty</p>                
      <input 
        type="number" 
        min="1" 
        max="99"
        defaultValue="1"
        className='w-24 p-4 text-cor5 text-center bg-cor3 border border-cor1 rounded-full 
                   outline-none focus:ring-2 focus:ring-cor5/50 font-bold'
    />

                <p className='pt-4 w-4/5  font-bold mx-auto text-cor5 text-center text-[16px]'>Refference URL</p>                
      <input
        type="text"
        placeholder="https://www.example.com"
        className=" p-4 text-cor5 placeholder-cor5 text-center 
                   bg-cor3 border rounded-full  border-cor1"/>


      </div>

  )
}

export default Search
