import React from 'react'
import banner from "../assets/images/banner.png"
import Search from './AddProductForm'
const Header = () => {

    const username = localStorage.getItem("pabuyan_user_name");

  return (
 <>
 <div>
    <div className="hidden md:block">
    <div className=' bg-cor2 h-[740px] w-full py-20  '>
          <h1 className='py-4 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Welcome {username}!</h1>
      <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Build your custom request list below. Once we locate your items and have news for you, a member of the Pabuyan team will reach out directly!</p>
      <Search />
    </div>
    </div>
    <div className='block md:hidden lg:hidden'>
    <img src={banner} alt="PaBUYan Banner" />
  
     <h1 className='pt-8 w-3/4 mx-auto font-bold text-cor3 opacity-95 text-center text-[20px]'> Welcome {username}!</h1>
      <p className=' w-4/5 mx-auto text-cor3 opacity-95 text-center text-[12px]'>Build your custom request list below. Once we locate your items and have news for you, a member of the Pabuyan team will reach out directly!</p>

    </div>
  </div>  
    </>
  )
}

export default Header
