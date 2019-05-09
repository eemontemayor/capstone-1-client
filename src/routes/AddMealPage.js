import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';
import MealApiService from '../services/meal-api-service';
import ApiContext from '../context/meals-context';
import MealItem from '../components/MealItem/MealItem';
import Bookmarks from '../components/Bookmarks/Bookmarks';
// import TokenService from '../services/token-service';
// import config from '../config';

export default class AddMealPage extends Component{
    constructor(props){
      super(props)
      this.state={
            isBrowsing:false,
            date:this.props.match.params.date,
            MOD:[],
            viewingBookmarks:false,
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
            isBrowsing:!this.state.isBrowsing,
        })
    }
    showBookmarks = e =>{
     
      this.setState({
        viewingBookmarks:!this.state.viewingBookmarks,
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
        .then(res =>{ 
          console.log(res);   // why can't I send data back from the server if it is not a 204? trying to get mealId from newly posted meal
          this.context.addMeal(newMeal) 
          // this.context.findMealByDate(this.state.date)
          this.context.addToCalDay([newMeal])
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
        <div className='add-meal-form'>
          { this.renderMealOfDay(...mealOfDay)} 
          
            <div className='add_meal_form'>
              <AddMealForm date={date} handleSubmit={this.handleSubmit}/>
              </div>
             <div className='alt-comp'> 
            <button className='add_meal_btn'>
              View Meal History
            </button>
            <button className='add_meal_btn' onClick={this.showBookmarks}>
                View Meal Bookmarks
            </button>
            <button className='add_meal_btn' onClick={this.showBrowser}>
                Browse Meal for Ideas
            </button><br/>
            {this.state.isBrowsing && <MealBrowserForm date={date}  />} 
            {this.state.viewingBookmarks && <Bookmarks date={date}/>}
           </div>
           </div> 
        )
    }
}



// must have a back button


