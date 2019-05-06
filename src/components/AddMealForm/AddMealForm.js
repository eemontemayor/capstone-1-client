import React, {Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';
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




 

    render(){
     const {handleSubmit, date} = this.props
      const{  handleChange } = this.context
      
        return(
            <form
            className='AddMealForm' onSubmit={handleSubmit.bind(this)}>   
            <div>{date}</div>        
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