import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Style.css'


const HomePage = () => {
    let [country,setCountry]=useState([])
    let [regin,setRegion]=useState("")

let countryFunc=()=>{
    axios.get('https://restcountries.com/v2/all')
    .then((res)=>{
       
        setCountry(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
useEffect(()=>{
    countryFunc()
},[])

let setRegions=(e)=>{
 
  axios.get(`https://restcountries.com/v2/region/${e.target.value}`)
  .then((res)=>{
    setCountry(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })


} 

  return (
    <div className='country'>
      <h1 className='welcome'>WELCOME TO THIS PAGE</h1>
      <select style={{marginBottom:"15px"}} onChange={setRegions} >
        <option value="">Select Region</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
        <option value="Polar">Polar</option>
        <option value="Antarctic Ocean">Antarctic Ocean</option>
      </select>
      <div className='list_view'>
        
           {country.map((elem)=>(
          
            <div  key={elem.name} style={{border:"2px solid black",borderRadius:"8px"}}>
                
                <img src={elem.flag} alt="flag"  className='flag'/>
                <h3 style={{textAlign:"center"}}>Name :- {elem.name}</h3>
                <h3 style={{textAlign:"center"}}>Capital :- {elem.capital}</h3>
                <h3 style={{textAlign:"center"}}>Region :- {elem.region}</h3>
                <h3 style={{textAlign:"center"}}>Native Name :- {elem.nativeName}</h3>
                <h3 style={{textAlign:"center"}}>Population :- {elem.population}</h3>
              </div>
           )  )  } 
           
           </div>
    </div>
  )
}

export default HomePage