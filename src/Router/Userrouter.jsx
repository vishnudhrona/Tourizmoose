import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Userpages/Homepage'
import Userlogin from '../User/Component/Userlogin'

const Userrouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Userlogin />} />
    </Routes>
  )
}

export default Userrouter
