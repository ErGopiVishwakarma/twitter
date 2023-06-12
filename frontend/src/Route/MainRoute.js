import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Auth from '../Authentication/Auth'
import Hii from '../Pages/Hii'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Hii />} />
      <Route path='/auth' element={<Auth />} />

    </Routes>
  )
}

export default MainRoute