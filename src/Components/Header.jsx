import React from 'react'
import banner from "../assets/images/banner.png"
import Search from './Search'
const Header = () => {
  return (
 <>
 <div>

    <div className=' bg-cor2 h-[740px] w-full py-20  '>
          <h1 className='py-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <p className='py-8 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
      <Search />
    </div>
  </div>  
    </>
  )
}

export default Header
