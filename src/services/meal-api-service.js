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

  getUserMeals(){
    return fetch(`${config.API_ENDPOINT}/meals`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then((mealsRes) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
        return mealsRes.json()
      })
      .catch(error => {
        console.error({error})
      })
   
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
        console.log(res);
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(r => Promise.resolve(r))
      })
      .catch(error => {
        console.log({error})
      })
    },




    deleteMeal(meal){
      return fetch('http://localhost:8000/api/meals', { 
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(meal)
      })
      // .then(res => { 
      //   (!res.ok)
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // })
      // .catch(error => {
      //   console.log({error})
      // })
    }
  

};
export default MealApiService;