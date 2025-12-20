import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Layout/NavBar';
import banner from "../assets/images/banner.png"
import CategoryList from '../Components/CategoryList';
const Categories = () => {

  return (
    <div>
    <NavBar />
     <CategoryList />
    </div>
  )
}

export default Categories
