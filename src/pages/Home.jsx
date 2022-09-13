import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'



function Home() {
  return (
    <>
    <div>Desi Recipies</div>
   <Header/>
 <Link to="/Recetas"><button>Recetas</button></Link>
    
    </>
  )
}

export default Home