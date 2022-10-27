import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    let home=JSON.parse(localStorage.getItem("home"))||[]
    let navigate=useNavigate()
    
  return (
    <div>
               <h1 style={{marginLeft:"31%",color:"blue",fontSize:"35px",fontWeight:"bolder"}}>PLEASE CONFORM YOUR BOOKING</h1>
                {home.map((ele)=>(
                    <div>
                        <h1  style={{marginLeft:"35%",color:"tomato",fontSize:"35px",fontWeight:"bolder"}}>TOTAL PRICE - {ele.price}/-</h1>
                    </div>
                ))}
              {home.map((elem)=>(
                <div key={elem.id}>
                    <img src={elem.url} alt="home" style={{marginLeft:"270px"}} />
                    <h2 style={{marginLeft:"520px"}}><b>Description - {elem.description}.</b></h2>
                    <h2 style={{marginLeft:"520px"}}><b>Price - {elem.price}.</b></h2>
                    <h2 style={{marginLeft:"520px"}}><b>BHK - {elem.bhk}.</b></h2>
                    <h2 style={{marginLeft:"520px"}}><b>LOCATION - {elem.location}.</b></h2>
                </div>
              ))} 

           <Button ml='44%' mt='40px' bg='blue' onClick={()=>{
               navigate('/success')
           }}>CLICK TO CONFIRM</Button>

    </div>
  )
}

export default Payment