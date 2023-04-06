import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ isAuthenticated, children}) => {
    if (isAuthenticated) {
        return <Navigate to={"/dashboard"}/>
    }

  return children
}

export default PublicRoute