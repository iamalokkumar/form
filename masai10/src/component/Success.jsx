import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    let [img,setImg]=useState("https://i.pinimg.com/originals/e2/ce/da/e2ceda157f9fbf8f43ebd486692f575c.gif")
    let [status,setStatus]=useState("YOUR PAYMENT IS LOADING")
    let navigate=useNavigate()

    useEffect(()=>{
       setTimeout(()=>{
          setImg("https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif")
          setStatus("PAYMENT SUCCESSFULL HAVE A NICE DAY")
          setTimeout(()=>{
            navigate('/order')
         },3000)
       },6000)

    },[])
  return (
    <div>
        <img src={img} alt="" style={{marginLeft:"30%",marginTop:"60px",borderRadius:"10px"}} />
        <h1 style={{marginLeft:"34%",color:"blue",fontSize:"35px",fontWeight:"bolder"}}>{status}...</h1>

    </div>
  )
}

export default Success