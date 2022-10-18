import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Style from './Style.module.css'

const Restaurant = () => {


    let token=useSelector((store)=>store.authlogin.token)
    useEffect(()=>{
        axios.get(` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${1}&limit=10`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   
    },[])
    
  
    
  return (
    <div>
        <div className={Style.navbar}>
            
            <h1  style={{fontSize:"25px",fontWeight:"bolder",cursor:"pointer"}} >Restaurant Page</h1>
            <h1  style={{fontSize:"25px",fontWeight:"bolder",cursor:"pointer"}} >Cart Page</h1>
        </div>

           <h1 style={{marginLeft:"38%",marginTop:"40px",color:"red",fontSize:"20px"}}><b>USER TOKEN</b> -  <b>{token}</b></h1>
           
    </div>
  )
}

export default Restaurant