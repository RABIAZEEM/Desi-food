import axios from 'axios'

export const services =()=> {

    const apiRecipes = "https://app.sheetlabs.com/MIRE/mirecipes";

    const getRecipes=() =>{
    return axios.get(apiRecipes)
}
  return {
    getRecipes
   
  }
}

