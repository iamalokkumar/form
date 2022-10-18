


import { PENDING_LOG,SUCCESS_LOG,FAILED_LOG } from "./actionType";


export let pending=()=>{
    return {
        type:PENDING_LOG
    }
}
 export let success=(token)=>{
    return {
        type:SUCCESS_LOG,token
    }
}
 export let failure=()=>{
    return {
        type:FAILED_LOG
    }
}