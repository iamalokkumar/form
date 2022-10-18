import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AllData from '../component/AllData'
import Details from '../component/Details'
import Login from '../component/Login'
import Register from '../component/Register'

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/alldata' element={<AllData/>}/>
            <Route path='alldata/:id' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default Routings