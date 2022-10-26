

import { useState } from 'react'
import './App.css'
import Togle from './Togle'


function App() {
let [data,setData]=useState("")
let [arr,setArr]=useState([])



let handleChange=(e)=>{
   setData(e.target.value)
}
let myFun=()=>{
  setArr([...arr,data])
}
let letDelete=(elem)=>{
  let sup=arr.filter((el,i)=>{
    return el!==elem
  })
  setArr(sup)
}


  return (
    <div className="App">
    
     <input type="text" placeholder='This is todod app' onChange={handleChange}/>
     <button onClick={myFun}>ADD</button>
        {arr.map((elem)=>(
          <div key={elem} style={{display:"flex",justifyContent:"space-between"}}>
            <h1>{elem}</h1>
       <Togle />
       <button onClick={()=>{letDelete(elem)}}>Delete</button>
          </div>
        ))} 
   
    </div>
  )
}

export default App
