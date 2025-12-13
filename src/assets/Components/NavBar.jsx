import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between p-8'>
      <p className=' text-cor5 opacity-100'> LOGO</p>

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
