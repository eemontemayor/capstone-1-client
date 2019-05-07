import config from '../config';
import TokenService from '../services/token-service';

const MealApiService = {
    getBrowserMeals(x) {
      return fetch(`https://api.edamam.com/search?q=${x}&app_id=108438ee&app_key=9fa106c05de3b6d9c71df9aecbab94e6`, { 
      
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        );
    },
    postMeal(x){
      return fetch('http://localhost:8000/api/meals',{ //TO-DO hide these endpoints in config/env files
        method: 'POST',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(x)

      })
      .then(res => { 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .catch(error => {
        console.log({error})
      })
    },
    deleteMeal(x){
      return fetch('http://localhost:8000/api/meals', {
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(x)
      })
      .then(res => { 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .catch(error => {
        console.log({error})
      })
    }
  

};
export default MealApiService;