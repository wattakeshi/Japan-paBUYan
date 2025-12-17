import React from 'react'
import logo from "../../assets/images/logo.jpg"
const NavBar = () => {
  return (
  <div>
    <div className='hidden md:block'>
    <div className='flex justify-between items-center bg-rose-900'>
      <img src={logo} alt="JapanpaBUYan" className="h-16 p-0 rounded-full" />

      <div className='flex '>
      <p className=' text-cor5 opacity-100 px-8'>Home </p>
      <p className=' text-cor5 opacity-100 px-8'> CATEGORIAS   </p>
      <p className=' text-cor5 opacity-100 px-8' >IMPORTECONOSCO </p>
      </div>

      <p className=' text-cor5 opacity-100'>LUGAR DO LOGIN</p>
    </div>
    </div>
    <div className='flex justify-between items-center bg-cor3 w-screen h-12 block md:hidden'>
            <p className=' text-cor5 opacity-100 px-8'>Home </p>
      <p className=' text-cor5 opacity-100 px-8'> CATEGORIAS   </p>
            <p className=' text-cor5 opacity-100 px-8'>Login </p>
    </div>
</div>
  )
}

export default NavBar
