import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import Login from '../auth/Login'
import Home from '../Pages/Home'
import Explore from '../Pages/Explore'
import Notification from '../Pages/Notification'
import Message from '../Pages/Message'
import List from '../Pages/List'
import Bookmark from '../Pages/Bookmark'
import Verified from '../Pages/Verified'
import Profile from '../Pages/Profile'
import More from '../Pages/More'
import PostDetail from '../Pages/PostDetail'

const MainRoute = () => {
  return (
    <Routes w='100%'>
      <Route path='/' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/notification' element={<Notification />} />
      <Route path="/message" element={<Message />} />
      <Route path='/list' element={<List />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path='/verified' element={<Verified />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/more" element={<More />} />
      <Route path="post/:id" element={<PostDetail />} />
    </Routes>
  )
}

export default MainRoute