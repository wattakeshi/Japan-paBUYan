import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Categories from './Components/Categories'
import NavBar from "./Components/Layout/NavBar"

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
