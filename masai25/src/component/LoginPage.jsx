import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Style.css'
import { PENDING,SUCCESS,REJECT } from '../Redux/actionType'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    let [mail,setMail]=useState("")
    let [password,setPassword]=useState("")
  
    let handleMail=(e)=>{
         setMail(e.target.value)
    }
    let handlePassword=(e)=>{
        setPassword(e.target.value)
   }
   let dispatch=useDispatch()
 let navigate=useNavigate()

let loginFunc=()=>{
    dispatch({type:"PENDING"})
    axios.post("https://reqres.in/api/login",{
        email:mail,
        password:password
    })
    .then((res)=>{
        dispatch({type:"SUCCESS"})
        console.log(res.data)
            navigate('/homepage')
    })
    .catch((err)=>{
        dispatch({type:"REJECT"})
        console.log(err)
    })
}




  return (
    <div className='login'>
        <h1>WELCOME TO LOGIN PAGE</h1>
        <input type="text" placeholder='Enter Your Mail' className='mail' onChange={handleMail}/>
        <input type="text" placeholder='Enter Your Password' className='password' onChange={handlePassword}/>
        <br />
        <button style={{height:"60px",width:"200px",borderRadius:"6px",backgroundColor:"blue",color:"whitesmoke"}} onClick={loginFunc}>Login</button>
    </div>
  )
}

export default LoginPage