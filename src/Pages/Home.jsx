import { useState } from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import NavBar from "../Components/Layout/NavBar"

function App() {

  return (
    <div> 
    <NavBar />
    <Header />
        <div className='block md:hidden'>
     <h1 className='pt-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[20px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <p className=' w-4/5 mx-auto text-cor5 text-center text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
      </div>
    <Categories />
    </div>
  )
}

export default App
