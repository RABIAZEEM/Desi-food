import axios from 'axios'

export const services =()=> {

    const apiRecipes = 'https://sheetlabs.com/records/{organization}/{dbName}';

    const getRecipes=() =>{
    return axios.get(apiRecipes)
}
  return {
    getRecipes
   
  }
}

