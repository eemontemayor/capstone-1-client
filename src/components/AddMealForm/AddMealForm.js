import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';

export default class AddMealForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      meal_name: '',
      ingredients:'',

    };
  }


  handleAddMeal=(ev)=>{// this belongs in app and should be passed down via context
    ev.preventDefault()
    const {meal_name} = ev.target
  MealApiService.postMeal({
    meal_name: meal_name.value
  })
  .then(res => console.log('here'))
  
  
  } 

  handleChange = (e) => {
 
    this.setState({
      [e.target.name]: e.target.value
    });
  }

    render(){
        return(
            <form
            className='AddMealForm' onSubmit={this.handleAddMeal}>           
            <div className='meal_name'>
              <label htmlFor='addMealForm_meal_name'>
                Meal Name
              </label>
              <Input
                type="text"
                name='meal_name'
                onChange={this.handleChange.bind(this)}
                required
                >
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
                <div className= 'ingredients'>
                <label htmlFor='ingredients'>Ingredients

                </label><br/>

              <Textarea
                
                name='ingredients'
                onChange={this.handleChange.bind(this)}
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