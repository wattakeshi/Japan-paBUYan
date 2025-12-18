import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Categories from "./Pages/Categories.jsx"
import AboutUS from './Pages/AboutUS.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/AboutUS" element={<AboutUS/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
