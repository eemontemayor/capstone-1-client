import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';

export default class AddMealForm extends Component{
    render(){
        return(
            <form
            className='AddMealForm'>           
            <div className='mealName'>
              <label htmlFor='addMealForm_meal_name'>
                Meal Name
              </label>
              <Input
                required
                name='meal_name'
                id='addMealForm_meal_name'>
              </Input>
            </div>
            <div className='dishType'>
              <label htmlFor='dishType'>Meal Type
              </label>
                <select>
                    <option value="null">...</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="other">Other</option>
                </select>
              </div>
                <div className= 'Ingredients'>
                <label htmlFor='ingredients'>Ingredients

                </label><br/>

              <Textarea
                
                name='ingredients'
                
                id='addMealForm_ingredients'>
              </Textarea>
                </div>
            <Button type='submit'>
              Add Meal
            </Button>
          </form>
        )
    }
}