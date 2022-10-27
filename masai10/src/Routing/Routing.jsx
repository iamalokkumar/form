import React from 'react'
import {Routes,Route} from 'react-router-dom'
import EditHome from '../component/EditHome'
import HomePage from '../component/HomePage'
import Order from '../component/Order'
import Payment from '../component/Payment'
import Success from '../component/Success'
import AuthLog from '../Login/AuthLog'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AuthLog/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/edit' element={<EditHome/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/success' element={<Success/>}/>
            
        </Routes>
    </div>
  )
}

export default Routing