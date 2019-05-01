
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


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  componentDidMount(){
//placeholder to fetch userinfo from database (ie calendar)?
  }

//place holder for add Meal function which makes a crud request to server then database
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
