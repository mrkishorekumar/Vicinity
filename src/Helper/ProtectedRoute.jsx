import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'


export const checkUser = () => {
  if (!Cookies.get('jwtKey')) {
    localStorage.removeItem("userId")
    return false
  }
  return true
}

function ProtectedRoute({ children }) {

  if (!checkUser()) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute