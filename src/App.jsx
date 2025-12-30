import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import PabuyanNews from "./Pages/PabuyanNews.jsx"
import AboutUS from './Pages/AboutUS.jsx'
import SignUP from './Pages/SignUP.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Profile from "./Pages/Profile.jsx"
import SuccessPage from './Pages/SuccessPage.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/SignUP" element={<SignUP />} />

      <Route path="/" element={<PrivateRoute>
        <Home/></PrivateRoute>} />
      <Route path="/PabuyanNews" element={<PrivateRoute>
        <PabuyanNews/></PrivateRoute>} />
      <Route path="/AboutUS" element={<PrivateRoute>
        <AboutUS/></PrivateRoute>}/>
      <Route path="/Profile" element={<PrivateRoute>
        <Profile/></PrivateRoute>} />
        <Route path="/SuccessPage" element={<PrivateRoute><SuccessPage/></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
