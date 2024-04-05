import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar, Products, Home, Articles, ChatRoom } from './components/index';



const App=()=>{

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Articles/' element={<Articles/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/ChatRoom' element={<ChatRoom/>}/>
      </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
