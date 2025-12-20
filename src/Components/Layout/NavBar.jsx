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
        <Link to="/Categories" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>Categories</Link>
        <Link to="/AboutUS" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>AboutUS</Link>
      </div>

      <p className=' text-cor5 opacity-100'>LUGAR DO LOGIN</p>
    </div>
    </div>
    <div className='flex justify-between items-center bg-cor3 w-screen h-12 block md:hidden py-8'>
        <Link to="/" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>HOME</Link>
        <Link to="/Categories" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>Categories</Link>
        <Link to="/AboutUS" className='text-cor5 opacity-100 px-8 hover:bg-cor2'>AboutUS</Link>
    </div>
</div>
  )
}

export default NavBar
