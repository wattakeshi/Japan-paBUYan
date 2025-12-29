import React from 'react'
import banner from "../assets/images/banner.png"
import AddProductForm from './AddProductForm'
const Header = () => {

    const username = localStorage.getItem("pabuyan_user_name");

  return (
 <>
 <div>
      <div className='block md:hidden lg:hidden'>
    <img src={banner} alt="PaBUYan Banner" />
  

    </div>
  </div>  
    <div className="">
    <div className=' bg-cor2 h-[740px] w-full md:py-20  '>
          <h1 className='py-4 w-3/4 mx-auto font-bold text-cor5 text-center md:text-[45px] text-[28px]'> Welcome {username}!</h1>
      <p className='md:py-4 w-4/5 mx-auto text-cor5 text-center md:text-[16px] text-[12px]'>Build your custom request list below. Once we locate your items and have news for you, a member of the Pabuyan team will reach out directly!</p>
      <AddProductForm />
    </div>
    </div>

    </>
  )
}

export default Header
