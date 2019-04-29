import React, {Component} from 'react';
import { Button, Input } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';

export default class MealBrowserForm extends Component{
    

    handleSubmit = e => {
        e.preventDefault()
        // const = 
        // MealApiService.getMeals(sfsdfdf).then...
    }
    render(){
        return(
            <div>
                <p>
                    Placeholder for MealBrowserForm
                    </p>
            </div>
        )
    }
}