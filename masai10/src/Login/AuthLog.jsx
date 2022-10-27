import React from 'react'
import Navbar from '../component/Navbar'
import Style from '../component/Style.module.css'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthLog = () => {
    let navigate=useNavigate()

    let[mail,setMail]=useState("")
    let[password,setPassword]=useState("")

    let logMail=(e)=>{
         setMail(e.target.value)
    }
    let logPassword=(e)=>{
        setPassword(e.target.value)
    }

    let Login=()=>{
        axios.post("https://reqres.in/api/login",{
            email:mail,
    password:password
        }).then((res)=>{
            alert("You Have Successfully Login To This Page")
            navigate('/homepage')
            console.log("Login success ful")
        })
        .catch((err)=>{
            alert("Please Try Again")
            console.log("Please try again")
        })
    }
  return (
    <div>
        <h1 style={{marginLeft:"31%",color:"blue",fontSize:"35px",fontWeight:"bolder"}}>PLEASE LOGIN HERE TO CONTINUE</h1>
     {/* <Navbar/> */}
     <div className={Style.login}>
     <Input placeholder='ENTER YOUR MAIL' h='60px' w='70%' bg='blue' ml='14%' mt='60px' onChange={logMail}/>
     <Input placeholder='ENTER YOUR PASSWORD' h='60px' w='70%' bg='blue' ml='14%' mt='10px' onChange={logPassword}/>
     <br />
     <Button colorScheme='blue' mt='70px' h='60px' w='150px' ml='40%' bg='blue' onClick={Login}>Button</Button>

     </div>
    </div>
  )
}

export default AuthLog