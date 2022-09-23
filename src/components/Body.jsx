import React from 'react'
import {Link} from 'react-router-dom'
import image from '../assets/img/background Image.jpg'
import '../styles/Body.css';
import breakfast from '../assets/img/breakfast.png'
import snacks from '../assets/img/nachos.png'
import desert from '../assets/img/desert.webp'
import dinner from '../assets/img/dinner.png'
import drinks from '../assets/img/cocktail.png'
import everyday from '../assets/img/everyday.png'
import kids from '../assets/img/kids.webp'
import soup from '../assets/img/soup.png'
import diet from '../assets/img/diet.png'


const catagories=[
  {
    title: "breakfast",
    imagen: breakfast
  },
  {
    title: "snacks",
    imagen: snacks
  },
  {
    title: "desert",
    imagen: desert
  },
  {
    title:"dinner",
    imagen: dinner
  },
  {
    title: "drinks",
    imagen: drinks
  },
  {
    title: "everyday",
    imagen: everyday
  },
  {
    title: "kids",
    imagen: kids
  },
  {
    title: "soup",
    imagen: soup
  },
  {
    title: "diet",
    imagen: diet
  }
]

 



function body() { 
  
  console.log(catagories);
  return (

    <div>
      
        <main>

<section className="">
 
  <div class="container-fluid">
     <div className='imagen'>
       <img src={image} alt='' className='img-fluid'/>
     </div>
     <h1 className="fw-light">Catagories</h1>
   </div>
   <div class="col-lg-6 col-md-8 mx-auto">
   </div>

</section>


<div className="album py-5 bg-light ">
  <div className="container">
 
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      {
        catagories.map((catagory,index )=>(

    <div class="col" key={index}>  
        <div className="card shadow-sm">
          
          <img src={catagory.imagen} alt=''className="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div className="card-body"> 
          

            <p className="card-text">{catagory.title}</p>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to="/Recetas"><button  className="btn btn-sm btn-outline-secondary">Recetas</button></Link>
              <Link to="/Edit"><button  className="btn btn-sm btn-outline-secondary">Edit</button></Link>
                {/* <button type="button " class="btn btn-sm btn-outline-secondary">View</button> */}
                {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
              </div>
             
            </div>
          </div>
        </div>
      </div>

        ))
      
}
      {/* <div class="col">
        <div class="card shadow-sm">
          
          <img src={snacks} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Snacks</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          
          <img src={desert} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Deserts</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
         
          <img src={dinner} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Dinner</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
         
          <img src={drinks} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Drinks</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          
          <img src={everyday} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Everyday Cooking</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
         
          <img src={kids} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Kids Food</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          
          <img src={soup} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Soup</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
         
          <img src={diet} alt=''class="bd-placeholder-img card-img-top"    width="100%" height="200"  preserveAspectRatio="xMidYMid slice" focusable="false"/>
          <div class="card-body">
            <p class="card-text">Diet Recipies</p>
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

</main>

    </div>

  )
}

export default body;