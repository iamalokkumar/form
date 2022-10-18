import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {

    let store=useSelector((store)=>store.arr)

    let {id}=useParams()
  return (
    <div>
       {store.map((elem)=>(
         elem.id==id && <img src={elem.url} alt="err" />
       ))}
    </div>
  )
}

export default Details