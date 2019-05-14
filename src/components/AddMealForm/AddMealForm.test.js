import React from 'react'
import ReactDOM from 'react-dom'
import AddMealForm from './AddMealForm';
import { BrowserRouter } from 'react-router-dom'
import MealApiService from "../../services/meal-api-service";

const handleSubmit=(ev)=>{
    ev.preventDefault()

    const on_day = this.state.date
    const {meal_name, ingredients} = ev.target
    const newMeal = {
      meal_name: meal_name.value,
      ingredients: ingredients.value,
      on_day: on_day, 
      bookmarked: false
    }

    MealApiService.postMeal(newMeal)
      .then(res =>{ 
        this.setState({
          MOD:[]
        })
    
      MealApiService.getUserMeals() //hacky but will do for now
        .then(meals => {
            this.setState({
                meals:meals
            },()=> {
            this.findMealByDate(this.state.date)
            })
        })
        .catch(error =>{
          console.error({error})
        })
      })
  .catch(error => {
    console.log({error})
    })
}


describe(`AddMealForm Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AddMealForm handleSubmit={handleSubmit}/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})