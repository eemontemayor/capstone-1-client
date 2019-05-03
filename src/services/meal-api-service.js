import config from '../config';
import TokenService from '../services/token-service';

const MealApiService = {
    getMeals(x) {
      return fetch(`https://api.edamam.com/search?q=${x}&app_id=108438ee&app_key=9fa106c05de3b6d9c71df9aecbab94e6`, { // go to server then go to thirdparty website ?
       // hide app id and app key when done
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        );
    },
    postMeal(x){
      return fetch('http://localhost:8000/api/meals',{ 
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(x)

      })
      .then(res => res.json())
    }

}
export default MealApiService;