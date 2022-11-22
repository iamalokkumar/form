import React from 'react'
import { useState } from 'react'
import Folders from './Folders'



const Folder = () => {
   let [arrow,setArrow]=useState(false)
    let [name,setName]=useState([])
   let [one,setOne]=useState(1)

    let obj={
        "type":"folder",
        "name":"MyFolder",
        "items":[
           {
              "type":"folder",
              "name":"fas",
              "items":[
                 "alok.py",
                 "xyz.py",
                 "ase.py",
                 "awe.py",
                 "opy.py",
              ]
           },
           {
              "type":"file",
              "name":"sfd"
           }
        ]
     }
     let myFun=()=>{
        setName(obj.items)
        setOne(one+1)
      

     }
    
   
  return (
    <div>
        
        <div>
        <div style={{display:"flex",marginLeft:"50%"}}>
      
            {arrow ? <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" style={{height:"15px",width:"15px",marginTop:"25px",marginRight:"10px"}} onClick={myFun}/> : <img src="        https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" style={{height:"15px",width:"15px",marginTop:"25px",marginRight:"10px"}} onClick={myFun}/> }
           
          <img src="https://icon-library.com/images/transparent-folder-icon/transparent-folder-icon-22.jpg" alt="" style={{height:"23px",width:"23px",marginTop:"25px",marginRight:"10px"}} onClick={myFun} />
           <h3 style={{color:"blue",backgroundColor:"red"}} onClick={myFun}>{obj.name}</h3>
        </div>
        { one % 2==0 ?name.map((elem)=>(
       
        <Folders elem={elem} obj={obj}/>
        )) :[]}
        </div>
    </div>
  )
}

export default Folder