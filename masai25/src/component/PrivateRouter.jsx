import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
  let store=useSelector((store)=>store.authLogin.login)

  if(!store){
    return <Navigate to='/'/>
  }
  return children

}

export default PrivateRouter