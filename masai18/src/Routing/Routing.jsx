import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../component/HomePage'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default Routing