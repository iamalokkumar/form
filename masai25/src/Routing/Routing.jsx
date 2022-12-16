import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../component/HomePage'
import LoginPage from '../component/LoginPage'
import PrivateRouter from '../component/PrivateRouter'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/homepage' element={<PrivateRouter><HomePage/></PrivateRouter>}/>
        </Routes>
    </div>
  )
}

export default Routing