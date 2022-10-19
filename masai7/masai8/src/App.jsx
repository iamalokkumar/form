import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
 

let reducer=(state,action)=>{
  switch(action.type){
    case "inc":{
      return state+1
    }
    case "dec":{
      return state-1
    }
  }
}


let [state,dispatch]=useReducer(reducer,0)
  return (
    <div className="App">
    <h1>WELCOME TO MASAI</h1>

   <h2>{state}- this is reducer value</h2>
   <button onClick={()=>{dispatch({type:"inc"})}}>inc</button>
   <button onClick={()=>{dispatch({type:"dec"})}}>dec</button>
    
    </div>
  )
}

export default App
