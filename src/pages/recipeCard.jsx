import React,{useEffect,useState} from 'react';
import Header from '../components/Header';
import '../styles/RecipeCard.css'
import paratha from '../assets/img/paratha.png'
import chanay from '../assets/img/chanay.jpg'
import bhaturay from '../assets/img/bhaturay.jpg'

function RecipeCard() {
//   const [recipesData, setRecipesData]=useState([])
 
//  useEffect(() => {
//   fetch("https://app.sheetlabs.com/MIRE/mirecipes")
//   .then(response => response.json())
//    .then(data => setRecipesData(data))
// },[])

//   console.log(recipesData);
  return (
    <div>
       <Header/>
       
      <div className='container'>
       <section>
        <div>
        <h1 className='Aloo ka paratha'>Aloo ka paratha</h1>
        <div>
          <img src={paratha} alt="" className='paratha'/>
        </div>
          <h2 className='Ingredients'>Ingredients:</h2>
          <p className='p'>boiled and mashed potatoes,oil,salt,all spices,wheat flour,water</p>
          <h2 className='Description'>Description:</h2>
          <p className='Text'>Prepare dough with flour and water.mix all the spices in boild and mashed potatoes.Make two samall rounds with the dough put potatoes in one round and cover with the other.Roll them and cook it in pan using oil untill golden browen from both sides.Serve it with chutni and pickle.</p>
          </div>
       </section>
     </div>
       
     <div className='container'>
       <section>
        <div>
        <h1 className='Naan chanay'>Naan chanay</h1>
        <div>
          <img src={chanay} alt="" className='chanay'/>
        </div>
          <h2 className='Ingredients'>Ingredients:</h2>
          <p className='p'>chickpeas,oil,tomato puri,ginger garlic paste,yogurt,all spices,water,green chilies and fresh coriender for garnish</p>
          <h2 className='Description'>Description:</h2>
          <p className='Text'>In a pan add some oil add ginger garlic paste saute them add tomato puri cook them for 2 minutes then add all spices add chickpeas mix them together add some water cover them for 5 minutes then add yogurt cook for other 5 minutes add fresh coriender and green chili for garnish.serve them with naan.</p>
          </div>
       </section>
     </div>
     <div className='container'>
       <section>
        <div>
        <h1 className='Bhaturay'>Bhaturay</h1>
        <div>
          <img src={bhaturay} alt="" className='bhaturay'/>
        </div>
          <h2 className='Ingredients'>Ingredients:</h2>
          <p className='p'>All purpose flour,boild lentile,salt,oil,water</p>
          <h2 className='Description'>Description:</h2>
          <p className='Text'>In a bowl add all purpose flour add salt, add boiled lentile mix them then make a soft dough using water.give it rest for 10 minutes then in a pan add oil and heat it to fry bhaturay make samll balls roll them, carefully fry them untill golden brown.Serve them with chanay aur aloo ki sabzi.</p>
          </div>
       </section>
     </div>
   </div>
   
  )
}

export default RecipeCard;