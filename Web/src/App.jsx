import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Food, Products, Home, Articles, ChatRoom } from './components/index';
// import  from './components/index';
import NavBar from './components/NavBar/NavBar';
 
const App=()=>{

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Articles/' element={<Articles/>}/>
      <Route path='/Articles/Food' element={<Food/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/ChatRoom' element={<ChatRoom/>}/>
      </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
