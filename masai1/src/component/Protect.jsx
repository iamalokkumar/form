import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Restaurant from './Restaurant'

const protect = () => {
    let login=useSelector((store)=>store.authlogin.isAuth)
    let navigate=useNavigate()
    useEffect(()=>{
        if(!login){
            navigate('/')
        }
    },[])
  return (
    <div>
        <Restaurant/>
    </div>
  )
}

export default protect