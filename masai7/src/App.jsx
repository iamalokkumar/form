

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


  return (
    <div className="App">
    
     <input type="text" placeholder='This is todod app' onChange={handleChange}/>
     <button onClick={myFun}>ADD</button>
        {arr.map((elem)=>(
          <div key={elem} style={{display:"flex",justifyContent:"space-around"}}>
            <h1>{elem}</h1>
       <Togle />
          </div>
        ))} 
   
    </div>
  )
}

export default App
