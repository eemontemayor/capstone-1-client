import React, {Component} from 'react';
import ApiContext from '../../context/meals-context';

export default class MealItem extends Component{
    static contextType = ApiContext;

    renderMealOfDay(x){
        let html = x.map(i => {
           return(`<div>${i.meal_name}</div>}`)
         })
         return html;
       }

    render(){
        console.log(this.props)
        const deleteMeal= this.context.deleteMeal
        
        return(
            <div></div>
        )
    }
} 