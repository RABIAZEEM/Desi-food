import React from 'react'
import logo from '../assets/img/logo.png'
import img from '../assets/img/heart.png'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    
    
<nav className="navbar navbar-expand-xl header navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Desi Recipies</Link>
    <img src={logo} alt="logo" className='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarBasic">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0 ">
        <li className="nav-item align-itmes-center  d-flex align-items-center">
          <Link to="/Login" className="nav-link active" aria-current="page" >LogIn</Link>
          
          <img src={img} alt="heart" className='heart'/>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Find a recipe" aria-label="find a recipe"></input>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        
        <Link to="/Search"><button className="btn btn-outline-success">Search</button></Link>
      </form>

    </div>
  </div>
</nav>
  )
}

export default Header