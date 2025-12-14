import React from 'react'
import logo from "../../assets/images/logo.jpg"
const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-rose-900'>
      <img src={logo} alt="JapanpaBUYan" className="h-16 p-0 rounded-full" />

      <div className='flex '>
      <p className=' text-cor5 opacity-100 px-8'>Home </p>
      <p className=' text-cor5 opacity-100 px-8'> CATEGORIAS   </p>
      <p className=' text-cor5 opacity-100 px-8' >IMPORTECONOSCO </p>
      </div>

      <p className=' text-cor5 opacity-100'>LUGAR DO LOGIN</p>
    </div>
  )
}

export default NavBar
