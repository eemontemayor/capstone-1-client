import React, {Component} from 'react';
import { Link } from 'react-router-dom';




  
  

export default class HomePage extends Component {


    

    


    render(){
        return (
            <div>
                <Link to='/mealBrowser' className='home-btn-browser' >Explore New Meals</Link><br/>    
                  
                <Link to='/mealPlanner'  className='home-btn-planner' >Plan your meals</Link>
            </div>
        )
    }
}