import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';
import ApiContext from '../../context/meals-context';
import { withRouter } from 'react-router-dom';


class AddMealForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      meal_name: '',
      ingredients:'',
      on_day:[],
    };
  }
  static contextType = ApiContext


  handleSubmit=(ev)=>{// this belongs in app and should be passed down via context or better on addMealComp
    ev.preventDefault()
    const on_day = this.props.match.params.day
    console.log(on_day)
    const {meal_name, ingredients} = ev.target
    
  MealApiService.postMeal({
    meal_name: meal_name.value,
    ingredients: ingredients.value,
    on_day: on_day,
  })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(meal => {
      this.context.addMeal(meal)
      this.props.history.push(`/addMeal/${on_day}`)
    })
  }

 

    render(){
     
      const{  handleChange, meals } = this.context
      
        return(
            <form
            className='AddMealForm' onSubmit={this.handleSubmit.bind(this)}>   
            <div>{this.props.match.params.day}</div>        
            <div className='meal_name'>
              <label htmlFor='addMealForm_meal_name'>
                Meal Name
              </label>
              <Input
                type="text"
                name='meal_name'
                onChange={handleChange.bind(this)}
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
                onChange={handleChange}
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
export default withRouter(AddMealForm);