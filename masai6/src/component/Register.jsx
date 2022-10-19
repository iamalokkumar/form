import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate=useNavigate()

    let [data,setData]=useState({
        username:"",
        car_name:"",
        color:"",
        date:"",
        url:"",
        price:""
    })
    
    let handleChange=(e)=>{
    //  console.log(e.target.name)
    //  console.log(e.target.value)

    let value=e.target.value;
    let name=e.target.name;
    setData({...data,[name]:value})
    }

    let finalAns=(e)=>{
       e.preventDefault()
      axios.post("https://masai-exam.herokuapp.com/api/car",{
        username: data.username,
    car_name: data.car_name,
    color:data.color,
    date: data.date,
    url: data.url,
   
    price: Number(data.price)
      })
      .then((res)=>{
        // console.log(res.data)
        alert("Registration was Successful")
        navigate("/alldata")

      })
      .catch((err)=>{
        console.log(err)
        alert("Error Data")
      })
    }
  return (
    <div>
        <div style={{backgroundColor:"blue"}}>
            <form action="" onSubmit={finalAns}>
                <label htmlFor="">NAME: </label>
                <input type="text" placeholder='Enter Name' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px",marginTop:"20px"}} name="username" id='username' onChange={handleChange}/>
                <br />
                <label htmlFor="">CAR NAME: </label>
                <input type="text" placeholder='Enter Car Name' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} name="car_name" id='car_name' onChange={handleChange}/>
                <br />
                <label htmlFor="">COLOR: </label>
                <input type="text" placeholder='Enter Color' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} name="color" id='color' onChange={handleChange}/>
                <br />
                <label htmlFor="">DATE: </label>
                <input type="date" placeholder='Enter Date' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} name="date" id='date' onChange={handleChange} />
                <br />
                <label htmlFor="">URL: </label>
                <input type="url" placeholder='Enter Date' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} name="url" id='url' onChange={handleChange} />
                
                <br />
                <label htmlFor="">Price: </label>
                <input type="number" placeholder='Enter Price' style={{height:"30px",width:"280px",marginBottom:"15px",borderRadius:"10px"}} name="price" id='price' onChange={handleChange}/>
                <br />
                <button type='submit' style={{marginBottom:"20px"}}>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Register