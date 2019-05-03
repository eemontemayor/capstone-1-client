
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
import ApiContext from "../../context/meals-context";

class App extends Component {
  state = { 
    hasError: false,
    calendar:[], /// this will contain the current calendar and the meals for each day
    meals:[], /// this will be for the bookmarks and history component
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

  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addMeal = (meal)=>{
    this.setState({
      meals:[
        ...this.state.meals,
        meal
      ]
    })
  }

  addCalendar = (calendar)=>{
    console.log('yep')
    this.setState({
      calendar: calendar
    })
  }





render() {
  const value={
    meals:this.state.meals,
    calendar: this.state.calendar,
    addCalendar:this.state.addCalendar,
    addMeal: this.addMeal,
    handleChange: this.handleChange,

  }
    return (
      <ApiContext.Provider value={value}>
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
            exact
            path= '/addMeal/:day' 
            render={routeProps=>{
              return( <AddMealPage {...routeProps}/>)
            }} />
          </Switch>
        </main>
      </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
