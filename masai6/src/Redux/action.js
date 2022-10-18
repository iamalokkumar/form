
import { PENDING,SUCCESS,ERROR } from "./actionType";
import axios from 'axios'

let pending=()=>{
    return {
        type:PENDING
    }
}

let success=(payload)=>{
    return{
        type:SUCCESS,payload
    }
}
let error=()=>{
    return{
        type:ERROR
    }
}


export let myFun=(dispatch)=>{
   dispatch(pending())
   axios.get("http://localhost:8080/car")
   .then((res)=>{
    dispatch(success(res.data))
   })
   .catch((err)=>{
    dispatch(error())
   })

  

}