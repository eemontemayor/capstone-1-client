import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Instructions from '../components/Instructions/Instructions'


export default class HomePage extends Component {
 

  

    render(){

        return (
            <div>
            <div className='home-page-div'>
           <Instructions/>
                <Link to='/mealBrowser' className='home-btn-browser' >BROWSE NEW MEALS</Link><br/>    
                  
                <Link to='/mealPlanner'  className='home-btn-planner' >PLAN YOUR MEALS</Link>
            </div>

            </div>
        )
    }
}