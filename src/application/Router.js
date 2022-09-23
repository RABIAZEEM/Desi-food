import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Body from '../components/Body'
import Recetas from '../pages/Recetas'
import Login from '../pages/Login'
import RecipeCard from '../pages/RecipeCard'



function Router() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Recetas' element={<Recetas/>}/>
    <Route path='/Body'  element={<Body/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/RecipeCard' element={<RecipeCard/>}/>

   
   </Routes>
   
   </BrowserRouter>
  )
}

export default Router;