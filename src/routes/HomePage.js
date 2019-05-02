import React, {Component} from 'react';
import { Link } from 'react-router-dom';



const BrowserStyle = {
    margin: '50px',
    padding: '20px',
    border: '5px solid pink',
  
    display:"inline-block",
    
  };
  const PlannerStyle={
    margin: '40px',
    padding: '20px',
    border: '5px solid yellow',
    
    display:"inline-block",
  }
  
  
  

export default class HomePage extends Component {


    // handleMealBrowserClick -> goes to 3rd party server, etc, 

    // handleMealPlannerClick -> goes to server then database


    render(){
        return (
            <div>
                <Link to='/mealBrowser' className='home-btn' style={BrowserStyle}>Explore New Meals</Link><br/>    
                  
                <Link to='/mealPlanner'  className='home-btn' style={PlannerStyle}>Plan your meals</Link>
            </div>
        )
    }
}