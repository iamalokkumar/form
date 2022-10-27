

import axios from "axios";
import { PENDING,SUCCESS,FAILURE } from "./actionType";

let pen=()=>{
    return{
        type:PENDING
    }
}
let suc=(payload)=>{
    return{
        type:SUCCESS,payload
    }
}

let fail=()=>{
    return{
        type:FAILURE
    }
}


export let myFun=(dispatch)=>{
    dispatch(pen())
    axios.get("http://localhost:8080/data")
    .then((res)=>{
       dispatch(suc(res.data))
    })
    .catch((err)=>{
        dispatch(fail())
    })
}