import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { myFun } from '../Redux/action'
import Style from './Style.module.css'

const AllData = () => {
  let change1=(e)=>{
    let value=e.target.value

     if(value=='htl'){
    let a1=store.sort((a,b)=>{
        return b.price-a.price
    })
    dispatch({type:'HTL',payloadss:[...a1]})
     }
     if(value=='lth'){
      let a2=store.sort((a,b)=>{
          return a.price-b.price
      })
      dispatch({type:'LTH',payloadsss:[...a2]})
       }
     
}
    let dispatch=useDispatch()
    let store=useSelector((store)=>store.arr)
 

    useEffect(()=>{
      dispatch(myFun)
    },[])

    let change=(e)=>{

     axios.get(`http://localhost:8080/car?q=${e.target.value}`)
     .then((res)=>{
        // console.log(res.data)
        dispatch({type:"SELECT",payloads:res.data})
     })
     .catch((err)=>{
        console.log(err)
     })
     
    }
  
  return (
    <>
     <select onChange={change}>
             <option >Please Select</option>
            <option value="suzuki">suzuki</option>
            <option value="tata">tata</option>
            <option value="audi">audi</option>
            <option value="bmw">bmw</option>
        </select>
        <select onChange={change1}>
             <option >Please Select price</option>
            <option value="htl">htl</option>
            <option value="lth">lth</option>
           
        </select>
    <div className={Style.main}>
       
       {store.map((elem)=>(
        <div key={elem.id} style={{border:"3px solid black",width:"300px",height:"500px"}} className={Style.div1}>
          <Link to={`/alldata/${elem.id}`}>
            <img src={elem.url} alt="car_pic" style={{width:"100%",height:"50%",borderRadius:"5px"}} />
            </Link>
          
            <h2><b>NAME: </b><i>{elem.username}</i></h2>
            <h2><b>CAR: </b><i>{elem.car_name}</i></h2>
            <h2><b>DATE: </b><i>{elem.date}</i></h2>
            <h2><b>COLOUR: </b><i>{elem.color}</i></h2>
            <h2><b>PRICE: </b><i>{elem.price}</i></h2>
            
        </div>
       ))}
    </div>
    </>
  )
}

export default AllData