
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import HomePage from '../../routes/HomePage';
import MealBrowserPage from '../../routes/MealBrowserPage';
import MealPlannerPage from '../../routes/MealPlannerPage';
import AddMealPage from '../../routes/AddMealPage';
import MealApiService from '../../services/meal-api-service';


class App extends Component {
  state = { 
    hasError: false,
    days:[],
    meals:[],
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  // componentDidMount(){
  //   Promise.all([
  //     fetch(`${config.API_ENDPOINT}/api/meals`),// initial fetch for landing page; shows all calendar and all meals
  //     fetch(`${config.API_ENDPOINT}/api/calendar`)
  //   ])
  //     .then(([mealsRes, calendarRes]) => {
  //       if (!mealsRes.ok)
  //         return mealsRes.json().then(e => Promise.reject(e))
  //       if (!calendarRes.ok)
  //         return calendarRes.json().then(e => Promise.reject(e))

  //       return Promise.all([
  //         mealsRes.json(),
  //         calendarRes.json(),
  //       ])
  //     })
  //     .then(([meals, calendar]) => { //(((********)))
  //       this.setState({ meals, calendar })
       
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // }
  // }




//place holder for add Meal function which makes a crud request to server then database
// handleAddMeal=(ev)=>{
//   ev.preventDefault()
//   const{name, meal_name}= ev.target
//   this.setState({
//     calendarMeals: [{[name]:meal_name}]// SINGLE ENTRY INPUT HANDLER
//   })
// MealApiService.postMeal({
//   meal_name: meal_name.value,
// })
// .then(meal => console.log(meal))  

// } 





render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={HomePage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
           
           <PrivateRoute
              path={'/mealBrowser'}
              component={MealBrowserPage}
            />
             <PrivateRoute
              path={'/mealPlanner'}
              component={MealPlannerPage}
            />
            <Route 
            path= '/addMeal/:day' 
            component= {AddMealPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
