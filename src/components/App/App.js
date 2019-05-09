
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
import MealApiService from '../../services/meal-api-service';
import TokenService from '../../services/token-service';
import './App.css';


class App extends Component {
  state = { 
    hasError: false,
    meals:[], 
    mealOfDay:[],
    selectedDay:null,
    isLoggedIn:false,
  
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/meals`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
    ])
      .then(([mealsRes]) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
        return Promise.all([
          mealsRes.json(),
        ])
      })
      .then(([meals]) => { 
        console.log([meals])
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

  deleteMeal=(meal, mealNum)=>{
    let newMOD = this.state.mealOfDay

    if(meal.id === undefined){
      
      delete newMOD[mealNum]
      this.setState({
        mealOfDay:newMOD
      })
    } else{

    
    console.log(meal)


    MealApiService.deleteMeal(meal)
    .then(res =>{
      console.log(res)
      delete newMOD[mealNum]
    })
    
    

    this.setState({
      mealOfDay:newMOD
    })
  }
  }




  addMeal = (meal)=>{
    this.setState({
      meals:[
        ...this.state.meals,
        meal
      ]
    })
  }

  addAllMeals= (meals)=>{
    this.setState({
      meals:meals
    })
  }


  onDateClick = day => { 
    this.setState({
     selectedDate: day,
     mealOfDay:[],
    });
};

findMealByDate=(day)=>{

  if(this.state.meals.length !== null){
    let MOD = []
    let meals=this.state.meals

    MOD = meals.filter(i => {
      return i.on_day !== null && i.on_day.startsWith(day)}) 
    this.addToCalDay(MOD)
  } else{
    return console.log('here')
  }
};

addToCalDay = (...meals) =>{
  
  let modArray=this.state.mealOfDay
  for (let i of meals[0]){
    modArray.push(i)
  }
  this.setState({
      mealOfDay: modArray//TO-DO change this so that it will accept an array of entries once the db gets big enough
    })
  }

  changeLogStatus=()=>{
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }




render() {
  const value={
    meals:this.state.meals,
    mealOfDay:this.state.mealOfDay,
    addToCalDay:this.addToCalDay,
    deleteMeal: this.deleteMeal,
    addMeal: this.addMeal,
    handleChange: this.handleChange,
    selectedDay:this.state.selectedDay,
    findMealByDate:this.findMealByDate,
    onDateClick:this.onDateClick,
    isLoggedIn:this.state.isLoggedIn,
    changeLogStatus:this.changeLogStatus,
    addAllMeals:this.addAllMeals,
  }
  
    return (
      <div className= 'App__body'>
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
      </div>
    );
  }
}

export default App;
