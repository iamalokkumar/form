


import { increment,decrement } from "./actionType";


export let inc=(payload)=>{
    return {
        type:increment,payload
    }
}
export let dec=(payload)=>{
    return {
        type:decrement,payload
    }
}


