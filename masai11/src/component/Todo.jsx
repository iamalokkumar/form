import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Todo = () => {
let [data,setData]=useState("")
let [arr,setArr]=useState([])

    let handleChange=(e)=>{
        setData(e.target.value)
       
    }
    let myFun=()=>{
      axios.post("http://localhost:8080/posts",{
        name:data
      }).then((res)=>{
         setArr([...arr,res.data])
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div>
        <input type="text" placeholder='Enter Data' onChange={handleChange}/>
        <button onClick={myFun}>Click</button>

        {arr.map((elem)=>(
            <div key={elem.id}>{elem.name}</div>
        ))}
    </div>
  )
}

export default Todo