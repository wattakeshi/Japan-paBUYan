import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Layout/NavBar';
import FacebookPost from '../Components/FacebookPost';
import Footer from '../Components/Layout/Footer';
const Categories = () => {

  return (
    <div className='min-h-screen w-full bg-[url("../../src/assets/images/sakurabg.png")] '>
    <NavBar />
     <FacebookPost />
     <Footer />
    </div>
  )
}

export default Categories
