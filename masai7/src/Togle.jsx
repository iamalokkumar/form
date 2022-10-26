import React, { useState } from 'react'

const Togle = () => {
    let [togle,setTogle]=useState(false)
    let letTogle=()=>{

        setTogle(!togle)
       }
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
             <button onClick={()=>{letTogle()}}>Toogle</button>
       <div>{togle ? <h1>Done</h1> : <h1>Not Done</h1>}</div>
      
    </div>
  )
}

export default Togle