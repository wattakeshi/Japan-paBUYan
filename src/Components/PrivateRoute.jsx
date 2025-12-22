import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const isLoggedIn = localStorage.getItem("pabuyan_user_id")
  return isLoggedIn ? children : <Navigate to="/SignUP"/>
  
}

export default PrivateRoute
