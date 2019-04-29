
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import HomePage from '../../routes/HomePage';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          {/* <Header /> */}
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
           
           
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
