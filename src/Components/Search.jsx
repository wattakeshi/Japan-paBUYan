import React from 'react'

const Search = () => {
  return (

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

  )
}

export default Search
