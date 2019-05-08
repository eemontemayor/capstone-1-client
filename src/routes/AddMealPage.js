import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';
import MealApiService from '../services/meal-api-service';
import ApiContext from '../context/meals-context';
import MealItem from '../components/MealItem/MealItem';


export default class AddMealPage extends Component{
    constructor(props){
      super(props)
      this.state={
            isBrowsing:false,
            date:this.props.match.params.date,
      
        }
    }
    static contextType = ApiContext

    componentDidMount(){
      //TO-DO findMealById should go here
    }
    
  


    renderMealOfDay(...x){
  
     let html = x.map((i, index) => { 
      if(i !== undefined){
        return(
          <MealItem meal_name={i.meal_name} id ={i.id}key={index} mealNum={index}/> 
          )
          
        }
        return null 
        
      
      })
      return html;
    }

    showBrowser = e =>{
        this.setState({
            isBrowsing:true,
        })
    }


    handleSubmit=(ev)=>{
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

      this.context.addToCalDay([newMeal])

      MealApiService.postMeal({
        meal_name: meal_name.value,
        ingredients: ingredients.value,
        on_day: on_day, 
        bookmarked: false
      })
  

     
        .catch(error => {
          console.log({error})
        })
      }
    



    render(){
        const date =this.state.date
        const mealOfDay= this.context.mealOfDay

        console.log(mealOfDay)
      
       
      
        return(
        <div>
          { this.renderMealOfDay(...mealOfDay)} 
          
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
            {this.state.isBrowsing && <MealBrowserForm date={date}  />} 
           </div>
           </div> 
        )
    }
}



// must have a back button
// must have access to history, bookmark, and browser component

