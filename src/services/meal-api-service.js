import config from '../config';
import TokenService from '../services/token-service';

const MealApiService = {
    getMeals() {
      return fetch(`${config.API_ENDPOINT}/meals`, { // go to server then go to thirdparty website ?
        headers: {
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        );
    },
}
export default MealApiService;