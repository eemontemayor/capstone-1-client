import React, {Component} from 'react';
import './MealItem.css';
import ApiContext from '../../context/meals-context';

export default class MealItem extends Component{
    static contextType = ApiContext;

    

    render(){
        const name =this.props.item
        const deleteMeal= this.context.deleteMeal
        const itemNum= this.props.itemNum // need to figure out better way to mutate the array
        return(
            <div className='meal-item'>
                
                
                    {name}
                <button className='delete-btn' onClick={()=>deleteMeal(itemNum)}>Remove</button>
                
                    
                    
                </div>
        )
    }
} 