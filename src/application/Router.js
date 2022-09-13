import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Header from '../components/Header'
import Recetas from '../pages/Recetas'


function Router() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Recetas' element={<Recetas/>}/>
    <Route path='/Header' element={<Header/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default Router