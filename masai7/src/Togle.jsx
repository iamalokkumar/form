import React, { useState } from 'react'

const Togle = () => {
    let [togle,setTogle]=useState(false)
    let letTogle=(e)=>{

        setTogle(!togle)
       }
  return (
    <div>
             <button onClick={()=>{letTogle()}}>Toogle</button>
       <div>{togle ? <h1>Done</h1> : <h1>Not Done</h1>}</div>
    </div>
  )
}

export default Togle