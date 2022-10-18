import React from 'react'
import Style from './Style.module.css'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { pending,success,failure } from '../Redux/authLogin/action'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    let [mail,setMail]=useState("")
    let [password,setPassword]=useState("")

    let navigate=useNavigate()
 let dispatch=useDispatch()

    let login=()=>{
        dispatch(pending())
        axios.post("https://reqres.in/api/login",{
            email:mail,
            password:password
        }).then((res)=>{
            dispatch(success(res.data.token))
            navigate('/restaurant')
            console.log(res.data)
        })
        .catch((err)=>{
            dispatch(failure())
            console.log(err)
        })
    }
  return (
    <div>
        <div className={Style.navbar}>
            <h1 style={{fontSize:"25px",fontWeight:"bolder",cursor:"pointer"}} onClick={()=>{navigate('/')}}>Login Page</h1>
            <h1  style={{fontSize:"25px",fontWeight:"bolder",cursor:"pointer"}} onClick={()=>navigate('/restaurant')}>Restaurant Page</h1>
        </div>
        <h1 style={{marginLeft:"43%",color:"red",fontSize:"25px",fontWeight:"bolder"}}>Login Page</h1>

        <div className={Style.container}>
        <Input placeholder='Enter Mail' mt='90px' w='45%' bg='white' ml='160px' onChange={(e)=>setMail(e.target.value)}/>
        <Input placeholder='Enter Password' mt='25px' w='45%' bg='white' ml='160px' onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <Button colorScheme='blue'  mt='25px'  ml='260px' onClick={login}>Login</Button >
        </div>
    </div>
  )
}

export default Login