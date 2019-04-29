import React, {Component} from 'react';
import { Link } from 'react-router-dom';




export default class HomePage extends Component {


    // handleMealBrowserClick -> goes to 3rd party server, etc, 

    // handleMealPlannerClick -> goes to server then database


    render(){
        return (
            <div>
                <Link to='/mealBrowser'>Explore New Meals</Link>
                <Link to='/mealPlanner'>Plan your meals</Link>
            </div>
        )
    }
}