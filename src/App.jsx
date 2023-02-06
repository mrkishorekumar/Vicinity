import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BuildingEntry from './Pages/BuildingEntry'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entry' element={<BuildingEntry />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App