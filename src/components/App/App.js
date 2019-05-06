
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
    meals:[], 
    mealOfDay:[],
    selectedDay:null,
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
      .then(([meals]) => { //TO-DO change initial fetch so that it only returns meals that user has submitted (now the whole db)  
        this.setState({ 
          meals:meals 
        })
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

  deleteMeal=(mealId)=>{
    this.setState({
      meals:this.state.meals.filter(meal => meal.id !== mealId)
    })
  }

  addMeal = (meal)=>{
    console.log(meal)
    this.setState({
      meals:[
        ...this.state.meals,
        meal
      ]
    })
  }

  onDateClick = day => { 
    debugger
    console.log('here')
    this.setState({
     selectedDate: day,
 });
};
  addToCalDay = (meal) =>{
    console.log(meal)
    this.setState({
      mealOfDay:[
        ...this.state.mealOfDay,
        meal
      ]
    })
  }
  findMealByDate=(day)=>{
    let MOD= this.state.meals.filter( meal => meal.on_day.startsWith(day))
    return MOD;
  };





render() {
  const value={
    meals:this.state.meals,
    mealOfDay:this.state.mealOfDay,
    addToCalDay:this.addToCalDay,
    deleteMeal: this.deleteMeal,
    addMeal: this.addMeal,
    handleChange: this.handleChange,
    selectedDay:this.state.selectedDay,
    findMealByDate:this.findMealByDate
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
