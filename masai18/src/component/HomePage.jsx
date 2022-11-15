import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
import Country from './Country'

const HomePage = () => {
let[country,setCountry]=useState([])
    let myFun=()=>{
    axios.get("https://restcountries.com/v2/all")
    .then((res)=>{
        console.log(res.data)
        setCountry(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    useEffect(()=>{
      myFun()
    },[])
  return (
    <div className='country'>
      {country.map((elem,i)=>(
        <Country elem={elem} i={i} key={i+1}/>
       
      ))}
    </div>
  )
}

export default HomePage