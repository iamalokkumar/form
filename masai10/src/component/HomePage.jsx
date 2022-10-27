import React from 'react'
import Navbar from './Navbar'
import Style from './Style.module.css'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'



const HomePage = () => {



let [data,setData]=useState({
   url:"",
   location:"",
   description:"",
   price:"",
   bhk:""
})
let handleChange=(e)=>{
  let name=e.target.name
  let value=e.target.value
  setData({...data,[name]:value})
}
    let fillData=(e)=>{
         e.preventDefault()
       axios.post("http://localhost:8080/data",{
         url:data.url,
         location:data.location,
         description:data.description,
         price:Number(data.price),
         bhk:data.bhk
       }).then((res)=>{
        alert("Successfully Registered")
        console.log(res.data)
       })  
       .catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div>
        <Navbar/>
        <div className={Style.entry}>
            <form onSubmit={fillData}>
        <Input placeholder='ENTER YOUR URL' h='45px' w='70%' bg='blue' ml='14%' mt='30px' name='url' id='url' onChange={handleChange}/>
        <Input placeholder='ENTER YOUR LOCATION' h='45px' w='70%' bg='blue' ml='14%' mt='30px' name='location' id='location' onChange={handleChange}/>
        <Input placeholder='ENTER YOUR DESCRIPTION' h='45px' w='70%' bg='blue' ml='14%' mt='30px' name='description' id='description' onChange={handleChange}/>
        <Input placeholder='ENTER YOUR PRICE' h='45px' w='70%' bg='blue' ml='14%' mt='30px' name='price' id='price' onChange={handleChange}/>
        <Select placeholder='Select Bhk'  h='45px' w='70%' bg='blue' ml='14%' mt='30px' name='bhk' id='bhk' onChange={handleChange}>
        
  <option value='3bhk'>3BHK</option>
  <option value='4bhk'>4BHK</option>
  <option value='5bhk'>5BHK</option>
</Select>
<br />
<Button colorScheme='blue' mt='5px' h='60px' w='150px' ml='40%' bg='blue' mb='10px' type='submit'>Submit</Button>
</form>
        </div>
    </div>
  )
}

export default HomePage