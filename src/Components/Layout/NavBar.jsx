import React from 'react'
import logo from "../../assets/images/logo.jpg"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
  <div>
    <div className='hidden md:block'>
    <div className='flex justify-between items-center bg-rose-900'>
      <img src={logo} alt="JapanpaBUYan" className="h-16 p-0 rounded-full" />

      <div className='flex '>
        <Link to="/" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>HOME</Link>
        <Link to="/PabuyanNews" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>PabuyanNews</Link>
        <Link to="/AboutUS" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>AboutUS</Link>
       
      </div>

       <Link to="/Profile" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>Profile</Link>
    </div>
    </div>
    <div className='flex justify-between items-center bg-cor3  h-12  md:hidden py-8'>
        <Link to="/" className='text-cor5 opacity-100 px-4 hover:bg-cor2 !font-bold'>HOME</Link>
        <Link to="/PabuyanNews" className='text-cor5 opacity-100 px-4 hover:bg-cor2 !font-bold'>NEWS</Link>
        <Link to="/Profile" className='text-cor5 opacity-100 px-4 hover:bg-cor2 !font-bold'>Profile</Link>
    </div>
</div>
  )
}

export default NavBar
