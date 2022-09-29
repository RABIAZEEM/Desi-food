import React from 'react'
import {Link} from 'react-router-dom'

function EditRecipe() {
  return (
  
    <div>
   
    <section className='form-Edit'>
        
           Edit:
            <input class="controls" type="text" nombre="name" id="name" placeholder="Recipe name"/>
            <input class="controls" type="text" ingredients="text" id="ingredients" placeholder="ingredients"/>
            <input class="controls" type="text" Description="text" id="Description" placeholder="Description"/>
            <input class="buttons" type="submit" value="Done"/>
            {/* <Link to="/Done"><button>Done</button></Link> */}
            

       
        
    </section>
    </div>
  )
}

export default EditRecipe;