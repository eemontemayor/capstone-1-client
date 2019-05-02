import React, {Component} from 'react';
import './ResultItem.css';

import MealApiService from '../../services/meal-api-service';

export default class ResultItem extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(ev)=>{// this belongs in app and should be passed down via context or better on addMealComp
        ev.preventDefault()
        const {name, ingredients, pic} = this.props
        console.log(name)
      MealApiService.postMeal({
        meal_name: name,
        image: pic,
        // ingredients: ingredients ---> commenting this out until i can format it later
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(meal => {
          this.context.addMeal(meal)
          this.props.history.push(`/addMeal/`)//${on_day} took off dyn path to debug
        })
      }



    render(){
   
    const ingredients= this.props.ingredients.map((i, index)=>{
        return <p key={index}>{i.text}</p>
    })
    return(
       
        <div className='result-item'>
        <h4>{this.props.name}</h4>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Save to my bookmarks</button><br/>
        <button>View Ingredients</button><br/>
        <button>View Instructions</button><br/>
        <img src={this.props.pic} alt='x'/>
        <div className='result-item-ingredients '>{ingredients}</div>
        {/* <p className='result-item-instructions hidden'>{props.instructions}</p> */}
        </div>
    )

}
}