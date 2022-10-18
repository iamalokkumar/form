import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   let[mail,setMail]= useState("")
   let[password,setpassword]= useState("")
   let navigate=useNavigate()

   let logIn=()=>{
      axios.post("https://reqres.in/api/login",{
        email:mail,
        password:password
      }).then((res)=>{
        // console.log(res.data.token)
        navigate("/register")
      })
      .catch((err)=>{
        console.log(err)
      })
   }
  return (
    <div style={{backgroundColor:"blue",borderRadius:"6px"}}>
        <h1>Please Login</h1>
        <input type="text" placeholder='Enter Name' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} onChange={(e)=>{setMail(e.target.value)}}/>
        <br />
        <input type="text" placeholder='Enter Password' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} onChange={(e)=>{setpassword(e.target.value)}}/>
        <br />
        <button style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px",backgroundColor:"green"}} onClick={logIn}>Login</button>
    </div>
  )
}

export default Login