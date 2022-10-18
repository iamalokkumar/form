
import {React, useState} from 'react'


let useApp=()=>{
let [data,setData]=useState("")

setData("Hello World")
return data


}

export {useApp}