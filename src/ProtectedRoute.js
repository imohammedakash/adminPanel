import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
const ProtectedRoute = ({ isAuthenticated, children}) => {
    const navigate = useNavigate()
    if (!isAuthenticated) {
        return <Navigate to={"/"} />
    }
  return children
}

export default ProtectedRoute