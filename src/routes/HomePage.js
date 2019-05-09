import React, {Component} from 'react';
import { Link } from 'react-router-dom';




  
  

export default class HomePage extends Component {


    

    


    render(){
        return (
            <div className='home-page-div'>
                <Link to='/mealBrowser' className='home-btn-browser' >EXPLORE NEW MEALS</Link><br/>    
                  
                <Link to='/mealPlanner'  className='home-btn-planner' >PLAN YOUR MEALS</Link>
            </div>
        )
    }
}