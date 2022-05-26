import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const getSearchByIngredient = (ingredient) => {
  return axios.get(`${baseUrl}filter.php?i=${ingredient}`);
};



export const getSearchById = (idDrink) => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );
};


export const getSearchByName = (strDrink) => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );
};


export const getRandom = () => {
  return axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
};