import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Categories from "./Pages/Categories.jsx"
import AboutUS from './Pages/AboutUS.jsx'
import SignUP from './Pages/SignUP.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/SignUP" element={<SignUP />} />

      <Route path="/" element={<PrivateRoute>
        <Home/></PrivateRoute>} />
      <Route path="/categories" element={<PrivateRoute>
        <Categories/></PrivateRoute>} />
      <Route path="/AboutUS" element={<PrivateRoute>
        <AboutUS/></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
