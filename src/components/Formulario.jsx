import React from 'react'
import {Link} from 'react-router-dom'


function Formulario() {
  return (
  
    <div>
   
    <section className='form-Login'>
        
           Login:
            <input class="controls" type="text" nombre="name" id="name" placeholder="name plz"/>
            <input class="controls" type="text" nombre="sirname" id="name" placeholder="sirname plz"/>
            <input class="controls" type="email" nombre="email" id="name" placeholder="email plz"/>
            <input class="controls" type="password" nombre="password" id="name" placeholder="password plz"/>
            <p>I am agree to terms and conditions</p>
            <input class="buttons" type="submit" value="Register"/>
            {/* <Link to="/Register"><button>Register</button></Link> */}
            <p><a href="#">¿already have an acout?</a></p>

       
        
    </section>
    </div>
  )
}

export default Formulario;