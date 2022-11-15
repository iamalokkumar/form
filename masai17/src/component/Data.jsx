import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
const Data = () => {
let [arr,setArr]=useState([])


    let myFun=()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            console.log(res.data)
            setArr(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        myFun()
    },[])

    let handleChange=(e)=>{
     let value=e.target.value;
       axios.get(`https://fakestoreapi.com/products/category/${value}`)
       .then((res)=>{
        setArr(res.data)
       })
       .catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div><select onChange={handleChange} >
    <option value="select">select</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
</select>
    <div className='Main'>
        
        {arr.map((elem)=>(
            <div key={elem.id} style={{height:"250px",width:"200px",marginBottom:"450px"}}>
                <img src={elem.image} alt="products" style={{width:"100%",height:"50%"}}/>
                <p>Name:{elem.title}</p>
                <p>Price:{elem.price}</p>
                <p>Price:{elem.description}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Data