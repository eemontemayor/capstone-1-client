import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';

export default class AddMealForm extends Component{
  handleAddMeal=(ev)=>{
    ev.preventDefault()
    const{name, meal_name}= ev.target
    console.log( meal_name)
    this.setState({
      calendarMeals: [{[name]:meal_name}]// SINGLE ENTRY INPUT HANDLER
    })
  MealApiService.postMeal({
    meal_name: meal_name.value,
  })
  .then(res => console.log(res))
  
  
  } 

    render(){
        return(
            <form
            className='AddMealForm' onSubmit={this.handleAddMeal}>           
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