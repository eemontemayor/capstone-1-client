import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../context/meals-context';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  static contextType = ApiContext
  handleLogoutClick = () => {
    this.context.changeLogStatus();
    TokenService.clearAuthToken();
   
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    ); //TO-DO need to make sure it re renders once logged in or logged out is clicked
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    );
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            The Meal Deal
          </Link>
        </h1>
        <span className='Header__tagline--wide'>Placeholdere</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      <span className='Header__tagline--narrow'>Placeholderss</span>
    </>;
  }
}
