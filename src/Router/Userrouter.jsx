import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Userpages/Homepage'

const Userrouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
    </Routes>
  )
}

export default Userrouter
