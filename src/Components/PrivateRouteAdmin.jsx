import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("pabuyan_admin_token")
    return isLoggedIn ? children : <Navigate to="/admin123" />

}

export default PrivateRoute
