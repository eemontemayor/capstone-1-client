
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
import config from '../../config';

class App extends Component {
  state = { 
    hasError: false,
    
    meals:[], /// this will be for the bookmarks and history component
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/meals`),// initial fetch for landing page; 
    ])
      .then(([mealsRes]) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
      
        return Promise.all([
          mealsRes.json(),
         
        ])
      })
      .then(([meals ]) => {
        
        this.setState({ 
          meals:meals 
        })
        console.log(this.state.meals)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  

  

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
            path= '/addMeal/:date' 
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
