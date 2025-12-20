import { useState } from 'react'
import Header from '../Components/Header'
import Categories from '../Components/CategoryList'
import NavBar from "../Components/Layout/NavBar"
import Footer from '../Components/Layout/Footer'

function App() {

  return (
    <div> 
    <NavBar />
    <Header />

    <Categories />
    </div>
  )
}

export default App
