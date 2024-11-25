import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/Register' element={<Register />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
    </>
  )
}
