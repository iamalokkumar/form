import React from 'react'
import Navbar from './Navbar'
import {useDispatch} from 'react-redux'
import { myFun } from '../Redux/action'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Style from './Style.module.css'
import axios from 'axios'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    let navigate=useNavigate()
    let [location,setLocation]=useState("")
let arr=JSON.parse(localStorage.getItem("home"))||[]
    let dispatch=useDispatch()
    let store=useSelector((store)=>store.arr)
    console.log(store)

useEffect(()=>{
    dispatch(myFun)
},[])

let cartData=(elem)=>{
   arr.push(elem)
   alert("Booking Successfully please Go To Payment Page")
   localStorage.setItem("home",JSON.stringify(arr))
}
let deleteData=(id)=>{
   axios.delete(`http://localhost:8080/data/${id}`)
   .then((res)=>{
    //    dispatch({type:"DELETE",payloads:res.data})
       dispatch(myFun)
   })
}
let sortPrice=(e)=>{
    if(e.target.value=='htl'){
        let data=store.sort((a,b)=>{
            return b.price-a.price
        })
        dispatch({type:"HTL",payloads:[...data]})
    }
    if(e.target.value=='lth'){
        let dataa=store.sort((a,b)=>{
            return a.price-b.price
        })
        dispatch({type:"LTH",payloadss:[...dataa]})
    }
}
let sortBhk=(e)=>{
   axios.get(`http://localhost:8080/data?q=${e.target.value}`)
   .then((res)=>{
    // console.log(res.data)
    dispatch({type:"BHK",bhk:res.data})
   })
   .catch((err)=>{
    console.log(err)
   })
}
let handleLocation=(e)=>{
   setLocation(e.target.value)
}
let setLocations=()=>{
    axios.get(`http://localhost:8080/data?q=${location}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:"LOCATION",location:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
        <Navbar/>
       <div style={{display:"flex"}}>
        <Select placeholder='Sort Price' w='10%' mt='30px' ml='20px' bg='blue' onChange={sortPrice}>
  <option value='htl'>High To Low</option>
  <option value='lth'>Low To High</option>
  
</Select>
<Select placeholder='Sort By BHK' w='10%' mt='30px' ml='20px' bg='blue' onChange={sortBhk} >
  <option value='3bhk'>3BHK</option>
  <option value='4bhk'>4BHK</option>
  <option value='5bhk'>5BHK</option>
  
</Select>
<Input placeholder='Search By Location' w='20%' mt='30px' ml='20px' bg='blue' onChange={handleLocation}/>
<Button colorScheme='blue' w='10%' mt='30px' ml='20px' bg='blue' onClick={setLocations}>Search</Button>

</div>
        <div className={Style.detail}>
            {store.map((elem)=>(
                <div key={elem.id} className={Style.home}>
                    <img src={elem.url} alt="home" className={Style.imgs}/>
                    <h2><b>Description - {elem.description}.</b></h2>
                    <h2><b>Price - {elem.price}.</b></h2>
                    <h2><b>BHK - {elem.bhk}.</b></h2>
                    <h2><b>LOCATION - {elem.location}.</b></h2>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4379/4379925.png" className={Style.list} onClick={()=>{
                        cartData(elem)
                        navigate('/payment')
                    }}/>
                    
                    <img src="https://www.seekpng.com/png/detail/202-2022672_edit-comments-edit-icon-png-circle.png" className={Style.list} onClick={()=>{
                       localStorage.setItem("id",JSON.stringify(elem.id))
                        navigate('/edit')
                    } }/>
                    <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" className={Style.list} onClick={()=>{
                        deleteData(elem.id)
                    }}/>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Order