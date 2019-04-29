import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render(){
        return (
            <div>
                <Link to='/mealBrowser'>Explore New Meals</Link>
                <Link to='/mealPlanner'>Plan your meals</Link>
            </div>
        )
    }
}