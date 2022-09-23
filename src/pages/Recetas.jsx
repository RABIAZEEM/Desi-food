import React,{useEffect,useState} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import image from '../assets/img/background Image.jpg';
import paratha from '../assets/img/paratha.png'
import chanay from '../assets/img/chanay.jpg'
import bhaturay from '../assets/img/bhaturay.jpg'
import puri from '../assets/img/puri.jpg'
import nihari from '../assets/img/nihari.jpg'
import paye from '../assets/img/paye.jpg'
import anda from '../assets/img/anda.jpg'
import chaye from '../assets/img/chaye.jpg'
import omelete from '../assets/img/omelete.jpg'
import haleem from '../assets/img/haleem.webp'
import '../styles/Recetas.css'
import '../assets/fonts/fonts.css';
 

const recipes=[
   {
    id: 1,
    nombre: "aloo ka paratha",
    imagen: paratha,
    video:  <iframe width="560" height="315" src="https://www.youtube.com/embed/5xLl6urVixg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   ,
    ingredients:" boiled potatoes,flour,all spices,oil",
    description: "prepare dough with flour and water.mix all the spices in boild and mashed potatoes.make two samall rounds with the dough put potatoes in one round and cover with the other.roll them and cook it in pan using oil untill golden browen from both sides"    
   },
   {
    id:2,
    nombre: "Naan chanay",
    imagen: chanay,
    ingredients: "chickpeas,oil,tomato puri,ginger garlic paste,yogurt,all spices,water,green chilies and fresh coriender for garnish",
    description: "In a pan add some oil add ginger garlic paste saute them add tomato puri cook them for 2 minutes then add all spices add chickpeas mix them together add some water cover them for 5 minutes then add yogurt cook for other 5 minutes add fresh coriender and green chili for garnish.serve them with naan. "
   },
   {
    id:3,
    nombre: "bhaturay",
    imagen: bhaturay,
    ingridients: "All purpose flour,boild lentile,salt,oil,water",
    description:"In a bowl add all purpose flour add salt, add boiled lentile mix them then make a soft dough using water.give it rest for 10 minutes then in a pan add oil and heat it to fry bhaturay make samll balls roll them, carefully fry them untill golden brown.Serve them with chanay aur aloo ki sabzi."
   },
   {
    id: 4,
    nombre:"Halwa puri",
    imagen: puri,
    ingridients:"All purpose flour,salt,yogurt,oil,selina,suger,water",
    description:"In a bowl,flour, salt and make a soft dough with water cover it and leave for rest.In a pan add oil add semolina fry it untill gets colour then add water mix it add suger.cook it until thick consistency.Now in a pan add oil take a small portion from dough roll it put it in oil fry from both sides untill golen brown.Serve it with halwa and chanay. "
   },
   {
    id:5,
    nombre:"Nihari",
    imagen: nihari,
    ingridients: "Beaf,onions,ginger garlic paste,tomatoes,oil, all spices, wheat flour,water",
    description: "in a pan add oil add beaf fry it untill change the colour, add onions fry them untill become soft, add ginger garlic paste saute them add tomatoes cook them all together then add all spices mx and cook them add water and cover it until the meat gets tender,then in a bowl mix wheat flour with water and add it with beaf cook it for another 10 minuts add green chilies and fresh coriender at the end.Serve it with naan or paratha",
   },
   {
    id:6,
    nombre:"Paye",
    imagen:paye,
    ingridients: "paye,onion,ginger garlic paste,tomatoes,green chilies,fresh coriender,all spices,oil,water",
    description:"In a pan add paye add onions and ginger garlic paste, add enough water to cook the paye cover then pan and leave for an hour(check in intervals) when the paye gets tender add oil, add tomatoes and all spices cook them all together then add water and cook for another 20 minutes at the end add green chilies and fresh coriender.Srve them with Roghani naan or khameeri roti",
   },
   {
    id:7,
    nombre:"Anda paratha",
    imagen: anda,
    ingredients: "wheat flour,water, salt,baleck paper,egg",
    description:"In a bowl make a dough with flour using water, then take small portion roll it put some oil make a ball tehn roll it again.in a pan fry the paratha with oil.In another pan add some oil put the agg in it fry it dish out add some salt and black paper.serve it with crispy paratha."
   },
   {
    id:8,
    nombre:"chaye",
    imagen: chaye,
    ingridients:"milk,black tea,water, suger",
    description:"in a sauce pan add water boil it the add black tea cook it untill make leave the dark colour then add milk cook it untill 5 to 6 boils.strain the tea in cup add suger of your taste.Serve it with paratha ,biscuites or cake",
   },
   {
    id:9,
    nombre:"Omelete",
    imagen: omelete,
    ingridients:"eggs,onion,tomatoes,green chilies,fresh coriender, salt,black paper,chili flax,turmeric powder",
    description:"In a bowel add eggs add all the ingridients and spices mix them well.In a pan add oil then put all the mixture in the pan cover it with the lid leave for 3 to 4 minutes. change the side carefully cover and cook for another 3 minutes.Dish out and serve it with bread slices or paratha"
   },
   {
    id:10,
    nombre: "haleem",
    imagen: haleem,
    ingridients: "boneless meat,onions,ginger garlic,tomatoes,green chilies,all spices,4 lentals,rice,wheat",
    description:"In a bowl mix all the lentals,rice and wheat.wash them and soak for 2 hours.in a big pan add oil put the boneless meat fry it until change the colour add onions,ginger garlic and tomatoes cook them for 5 minutes add all spices cook for another 2 minutes.add water cover it cook it until the meat gets tender.in other pan add all soacked lentels cook them untill gets tender then mix them in meat and mashed them all cook it untill get a thick consistency.make a tarka with onions mix it in haleem garnish it with choped ginger,green chilies and fresh coriender."
   }
]
function Recetas() {
 const [recipesData, setRecipesData]=useState([])
 
 useEffect(() => {
  fetch("https://app.sheetlabs.com/MIRE/mirecipes")
  .then(response => response.json())
   .then(data => setRecipesData(data))
},[])

  console.log(recipesData);
  return (
    <div>
     <Header/>
   

<section className="">
  
  <div className="container-fluid">
    <div className='imagen'>
    <img src={image} alt='' className='img-fluid'/>
    </div>
  <h1 className="fw-light">Catagories</h1>
  </div>

  <div className="col-lg-6 col-md-8 mx-auto">

  </div>

</section>


<div className="album py-5 bg-light ">
  <div className="container">
 
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {
        recipesData.map((recipes,index )=>(
      <div className="col" key={index}>
        <div className="card shadow-sm item-recipe">
         
          <img src={recipes.imagen} alt=''className=" card-img-top"    width="50%" height="50"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div className="card-body"> 
          

            <p className="card-text">{recipes.nombre}</p>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to="/RecipeCard"><button className="btn btn-sm btn-outline-secondary">RecipeCard</button></Link>
              <Link to="/Edit"><button className="btn btn-sm btn-outline-secondary">Edit</button></Link>
                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
              </div>
             
            </div>
          </div>
        </div>
      </div>
        ))
}


      {/* <div class="col">
        <div class="card shadow-sm">
         
          <img src={chanay} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Naan chanay</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="col">
        <div class="card shadow-sm">
          
          <img src={bhaturay} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Bhaturay</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="col">
        <div class="card shadow-sm">
          
          <img src={puri} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Halwa Puri</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="col">
        <div class="card shadow-sm">
          
          <img src={nihari} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Nihari</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="col">
        <div class="card shadow-sm">
         
          <img src={paye} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text"></p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="col">
        <div class="card shadow-sm">
         
          <img src={anda} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Anda paratha</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="col">
        <div class="card shadow-sm">
          
          <img src={chaye} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Chaye</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div> */}
   


    </div>
  </div>
</div>
  {/* <Link to="/RecipeCard"><button>RecipeCard</button></Link> */}


    </div>
  )
}

export default Recetas