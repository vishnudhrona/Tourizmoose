import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userrouter from './Router/Userrouter'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element = {<Userrouter />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
