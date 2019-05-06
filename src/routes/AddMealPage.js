import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';
import MealApiService from '../services/meal-api-service';
import ApiContext from '../context/meals-context';

export default class AddMealPage extends Component{
    constructor(props){
      super(props)
      this.state={
            isBrowsing:false,
            date:this.props.match.params.date,
           mealOfDay:[],
        }
    }
    static contextType = ApiContext

    componentDidMount(){
      this.findMealByDate(this.state.date)
    }
    
    findMealByDate=(x)=>{ // use this function to return a meal on day clicked if one is already stored

        let MOD= this.context.meals.filter( meal => meal.on_day.startsWith(x))
       
        this.setState({
          mealOfDay: [...this.state.mealOfDay,
            MOD]
        }) 
      };


    renderMealOfDay(x){
    
     let html = x.map(i => {
        return(`<div>${i.meal_name}</div>`)
      })
      return html;
    }

    showBrowser = e =>{
        this.setState({
            isBrowsing:true,
        })
    }


    handleSubmit=(ev)=>{// should this function live here or in Parent component and passed down via context?
        ev.preventDefault()
        const on_day = this.state.date
      
        const {meal_name, ingredients} = ev.target
        const newMeal = {
          meal_name: meal_name.value,
          ingredients: ingredients.value,
          on_day: on_day, 
          bookmarked: false
        }

      this.context.addMeal(newMeal)

      this.setState({
        mealOfDay:[
          ...this.state.mealOfDay,
          newMeal
        ]
      })

      MealApiService.postMeal({
        meal_name: meal_name.value,
        ingredients: ingredients.value,
        on_day: on_day, 
        bookmarked: false
      })
        // .then((res => { <------------- should i not have this here???
        //   console.log(res);
          
        //   // this.context.addMeal(meal)
        //   // this.props.history.push(`/addMeal/${on_day}`)
        // })

     
        .catch(error => {
          console.log({error})
        })
      }
    



    render(){
        const date =this.state.date
        const mealOfDay= this.state.mealOfDay
        
   
      
       
      
        return(
        <div>
          {this.renderMealOfDay(mealOfDay)} 
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
            {this.state.isBrowsing && <MealBrowserForm mealOfDay={mealOfDay}date={date} addToCalDay={this.handleSubmit} />} 
           </div>
           </div> 
        )
    }
}



// must have a back button
// must have access to history, bookmark, and browser component

