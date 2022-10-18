import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../component/Login'
import Restaurant from '../component/Restaurant'
import Protect from '../component/Protect'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
           
            <Route path='/restaurant' element={<Protect><Restaurant/></Protect>}/>
         
        </Routes>
    </div>
  )
}

export default Routing