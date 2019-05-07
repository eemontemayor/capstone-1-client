import React, {Component} from 'react';
import './MealItem.css';
import ApiContext from '../../context/meals-context';

export default class MealItem extends Component{
    static contextType = ApiContext;

    

    render(){
        const meal_name =this.props.className
        const mealId = this.props.id
        const deleteMeal= this.context.deleteMeal
       console.log(meal_name)
        return(
            <div className='meal-item' id={mealId}>
                
                
                    {meal_name}
                <button className='delete-btn' onClick={()=>deleteMeal(mealId)}>Remove</button>
                
                    
                    
                </div>
        )
    }
} 