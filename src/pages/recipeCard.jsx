import React from 'react'
import Header from '../components/Header';
import '../styles/RecipeCard.css'
import paratha from '../assets/img/paratha.png'

function RecipeCard() {
  return (
    <div>
       <Header/>
      <div>
       <section>
        <h1 className='Aloo ka paratha'>Aloo ka paratha</h1>
        <div>
          <img src={paratha} alt="" className='paratha'/>
        </div>
          <h2 className='Ingredients'>Ingredients:</h2>
          <p className='p'>boiled and mashed potatoes,oil,salt,all spices,wheat flour,water</p>
          <h2 className='Description'>Description:</h2>
          <p className='Text'>Prepare dough with flour and water.mix all the spices in boild and mashed potatoes.Make two samall rounds with the dough put potatoes in one round and cover with the other.Roll them and cook it in pan using oil untill golden browen from both sides.Serve it with chutni and pickle.</p>

       </section>
     </div>
   </div>
  )
}

export default RecipeCard