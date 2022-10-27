import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Style.module.css'

const Navbar = () => {
  return (
    <div>
        <div className={Style.navbar}>
          <Link to='/'>
            <h1 style={{fontSize:"30px",fontWeight:"bolder",marginTop:"20px"}}>INPUT DETAILS</h1>
            </Link>
            <Link to='/order'>
            <h1 style={{fontSize:"30px",fontWeight:"bolder",marginTop:"20px"}}>BOOKING PAGE</h1>
            </Link>
            <Link to='/homepage'>
            <h1 style={{fontSize:"30px",fontWeight:"bolder",marginTop:"20px"}}>SELL PAGE</h1>
            </Link>
            <h1 style={{fontSize:"30px",fontWeight:"bolder",marginTop:"20px"}}>PAYMENT PAGE</h1>
        </div>
    </div>
  )
}

export default Navbar