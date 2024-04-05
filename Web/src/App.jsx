import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import { NavBar,Home, Articles, ChatRoom ,ClothingAndFashion, BeautyAndPersonalCare, HomeAndLifestyle, FoodAndBeverages, TechAndGadgets, BabyAndKids  } from './components/index';

import {  Products, Home, Articles, ChatRoom } from './components/index';
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
      <Route path="/Products/ClothingandFashion" element={<ClothingAndFashion />} />
      <Route path="/Products/BeautyandPersonalCare" element={<BeautyAndPersonalCare />} />
      <Route path="/Products/HomeandLifestyle" element={<HomeAndLifestyle />} />
      <Route path="/Products/FoodandBeverages" element={<FoodAndBeverages />} />
      <Route path="/Products/TechandGadgets" element={<TechAndGadgets />} />
      <Route path="/Products/BabyandKids" element={<BabyAndKids />} />
      <Route path='/ChatRoom' element={<ChatRoom/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
