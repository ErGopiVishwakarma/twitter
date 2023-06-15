import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import Login from '../auth/Login'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/auth' element={<Login/>} />

    </Routes>
  )
}

export default MainRoute