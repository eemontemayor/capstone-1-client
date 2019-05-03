import React, {Component} from 'react';
import './ResultItem.css';

import MealApiService from '../../services/meal-api-service';

export default class ResultItem extends Component{
    

    handleBookmarkSubmit=(ev)=>{
        ev.preventDefault()
        const {name, ingredients, pic} = this.props
        const formattedIngredients = []
        for (let i=0; i<ingredients.length; i++){
         formattedIngredients.push(ingredients[i].text) 
        }
        console.log(ingredients)
      MealApiService.postMeal({
        meal_name: name,
        image: pic,
        ingredients: formattedIngredients, 
        bookmarked: true
       //user_id:
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(meal => {
          this.context.addMeal(meal)
          this.props.history.push(`/addMeal`)
        })
      }

      addToCalendar=(ev)=>{ // not keeping it DRY  but will work for now
        ev.preventDefault()
        const {name, ingredients, pic, date} = this.props
        const formattedIngredients = []
        for (let i=0; i<ingredients.length; i++){
         formattedIngredients.push(ingredients[i].text) 
        }
        console.log(ingredients)
      MealApiService.postMeal({
        meal_name: name,
        image: pic,
        ingredients: formattedIngredients, 
        on_day: date,
        bookmarked:false
        //user_id:
       
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(meal => {
          this.context.addMeal(meal)
          this.props.history.push(`/addMeal/${date}`)
        })
      }


    render(){
   const{ date}=this.props
    const ingredients= this.props.ingredients.map((i, index)=>{
        return <p key={index}>{i.text}</p>
    })
    return(
       
        <div className='result-item'>
        <h4>{this.props.name}</h4>
        <button type="submit" onClick={this.handleBookmarkSubmit.bind(this)}>Save to my bookmarks</button><br/>
        <button>View Ingredients</button><br/>
       
       {date && <button onClick={this.addToCalendar.bind(this)}>Add Meal to this day</button>}
        
        <img src={this.props.pic} alt='x'/>
        <div className='result-item-ingredients '>{ingredients}</div>
        </div>
    )

}
}