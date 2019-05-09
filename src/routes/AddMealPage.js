import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';
import MealApiService from '../services/meal-api-service';
import ApiContext from '../context/meals-context';
import MealItem from '../components/MealItem/MealItem';
// import TokenService from '../services/token-service';
// import config from '../config';

export default class AddMealPage extends Component{
    constructor(props){
      super(props)
      this.state={
            isBrowsing:false,
            date:this.props.match.params.date,
            MOD:[],
      
        }
    }
    static contextType = ApiContext

    componentWillMount(){
      //TO-DO findMealById should go here
      this.context.findMealByDate(this.state.date)
  
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



      MealApiService.postMeal({
        meal_name: meal_name.value,
        ingredients: ingredients.value,
        on_day: on_day, 
        bookmarked: false
      })
      .then(res =>{ // trying to get mealId from database from response // or somehow trying to get it to re-render with newMeal id as well
        this.context.addMeal(newMeal)
        this.context.findMealByDate(this.state.date)
        this.setState({
          MOD:this.context.mealOfDay
        })
      })
      .catch(error => {
        console.log({error})
        })
      }
    

   

    render(){
        const date =this.state.date
        // const mealOfDay= this.state.MOD
        const mealOfDay= this.context.mealOfDay
        
      
       
      
        return(
        <div>
          { this.renderMealOfDay(...mealOfDay)} 
          
            <div className='add_meal_form'>
              <AddMealForm date={date} handleSubmit={this.handleSubmit}/>
              </div>
             <div className='alt-comp'> 
            <button className='add_meal_btn' onClick={this.showBrowser}>
                Browse Meal for Ideas
            </button>
            <button className='add_meal_btn'>
              View Meal History
            </button>
            <button className='add_meal_btn'>
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

