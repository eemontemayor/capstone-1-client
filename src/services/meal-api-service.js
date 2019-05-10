import config from '../config';
import TokenService from '../services/token-service';

const MealApiService = {
  getBrowserMeals(x) {
      return fetch(`https://api.edamam.com/search?q=${x}&app_id=${config.APP_ID}&app_key=${config.API_KEY}`, { 
      
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
      return fetch(`${config.API_ENDPOINT}/meals`,{ //TO-DO hide these endpoints in config/env files
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
      return fetch(`${config.API_ENDPOINT}/meals`, { 
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