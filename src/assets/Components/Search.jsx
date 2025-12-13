import React from 'react'

const Search = () => {
  return (
    <div className='pt-20 w-full'>
      <h1 className='pb-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Nulla fringilla nunc in molestie feugiat</h1>
      <p className='pb-8 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
     <div className='flex items-center w-full max-w-lg mx-auto bg-transparent 
                      rounded-full '>
      <input
        type="text"
        placeholder="Search An Item"
        className="flex-grow p-4 text-cor5 placeholder-cor5 
                   bg-cor3 border rounded-full  border-cor1"
      />
      <input type="submit" value="send"
      className=' bg-cor3 border rounded-full  border-cor1'/>
      </div>
    </div>
  )
}

export default Search
