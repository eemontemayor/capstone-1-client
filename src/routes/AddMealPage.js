import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';
import MealApiService from '../services/meal-api-service';
import ApiContext from '../context/meals-context';

export default class AddMealPage extends Component{
    state={
        isBrowsing:false,
        date:this.props.match.params.date,
        
    }
    static contextType = ApiContext







 
 


    showBrowser = e =>{
        this.setState({
            isBrowsing:true,
        })
    }
    handleSubmit=(ev)=>{// should this function live here or in Parent component and passed down via context?
        ev.preventDefault()
        const on_day = this.state.date
      
        const {meal_name, ingredients} = ev.target
        
      MealApiService.postMeal({
        meal_name: meal_name.value,
        ingredients: ingredients.value,
        on_day: on_day, 
        bookmarked: false
        //user_id:
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
        const date =this.state.date
        const meals = this.context
       
      
        return(
        <div>
     
            <div><AddMealForm date={date} handleSubmit={this.handleSubmit}/>
            <button onClick={this.showBrowser}>
                Browse Meal for Ideas
            </button>
            <button>
              View Meal History
            </button>
            <button>
                View Meal Bookmarks
            </button><br/>
            {this.state.isBrowsing && <MealBrowserForm date={date} />} 
           </div>
           </div> 
        )
    }
}



// must have a back button
// must have access to history, bookmark, and browser component

