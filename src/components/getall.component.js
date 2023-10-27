import React from 'react'
import { Navigate } from 'react-router-dom'

function GetAll() {
    const token = localStorage.getItem("token");
    if(!token)
    {
        return <Navigate to='/register'  />

    }
  return (
    <div>GetAll</div>
  )
}

export default GetAll