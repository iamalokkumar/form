
import { useState } from 'react'
import './App.css'


function App() {
let[arr,setArr]=useState([])
  let [data,setData]=useState({
    name:"",
    email:"",
    age:"",
    dob:"",
    number:""
  })
 let handleChange=(e)=>{
  let value=e.target.value;
  let name=e.target.name;
   setData({...data,[name]:value}) 
 }

 let finalSubmit=(e)=>{
  e.preventDefault()
    let values={...data,id:Date.now()}
    setArr([...arr,values])
    console.log(arr)
 }

  return (
    <div className="App">
      <form action="" onSubmit={finalSubmit}>
        <label htmlFor="">NAME:</label>
        <input type="text" placeholder='Enter Name' id='name' name='name' onChange={handleChange} />
         <br />
        <label htmlFor="">EMAIL:</label>
        <input type="text" placeholder='Enter Email' id='email' name='email' onChange={handleChange} />
        <br />
        <label htmlFor="">AGE:</label>
        <input type="number" placeholder='Enter Age' id='age' name='age'  onChange={handleChange}/>
        <br />
        <label htmlFor="">DATA OF BIRTH:</label>
        <input type="date" placeholder='Enter dob' id='dob' name='dob'  onChange={handleChange}/>
        <br />
        <label htmlFor="">PHONE NUM:</label>
        <input type="number" placeholder='Enter Number' id='number' name='number' onChange={handleChange} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
