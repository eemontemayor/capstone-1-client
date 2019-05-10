import React, {Component} from 'react';
import { Link } from 'react-router-dom';




  
  

export default class HomePage extends Component {


    

    


    render(){
        return (
            <div>
            <div className='home-page-div'>
                <Link to='/mealBrowser' className='home-btn-browser' >EXPLORE NEW MEALS</Link><br/>    
                  
                <Link to='/mealPlanner'  className='home-btn-planner' >PLAN YOUR MEALS</Link>
            </div>
            <section>
                <p> Click on the Browser to search for delicious meals and add them to your bookmarks</p>
                <p>Click on the Planner to open up your calendar then click on a day to add either your own meals OR from the browser</p>
            </section>
            </div>
        )
    }
}