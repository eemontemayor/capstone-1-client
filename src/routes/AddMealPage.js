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
            meals:[],
            MOD:[],
            viewingBookmarks:false,
        }
    }
    static contextType = ApiContext

    componentDidMount(){ 
      MealApiService.getUserMeals()
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
    }

    findMealByDate=(day)=>{

      if(this.state.meals.length !== null){
        let MOD = []
        let meals=this.state.meals
    
        MOD = meals.filter(i => {
          return i.on_day !== null && i.on_day.startsWith(day)}) 
        this.addToCalDay(MOD)
      } else{
        return console.log('here')
      }
    };
    
    addToCalDay = (...meals) =>{
      
      let modArray=this.state.MOD
      for (let i of meals[0]){
        modArray.push(i)
      }
      this.setState({
          MOD: modArray//TO-DO change this so that it will accept an array of entries once the db gets big enough
        })
      }



      
 clearAndSetMOD=(newMeal,date)=>{
  MealApiService.postMeal(newMeal)
  .then(res =>{ 
    this.setState({
      MOD:[]
    })
  // console.log(res);   
  MealApiService.getUserMeals() //hacky but will do for now
    .then(meals => {
        this.setState({
            meals:meals
        },()=> {
        this.findMealByDate(date)
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

    MealApiService.postMeal(newMeal)
      .then(res =>{ 
        this.setState({
          MOD:[]
        })
      console.log(res);   
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
    
  deleteMeal=(meal, mealNum)=>{
    let newMOD = this.state.MOD
    if(meal.id === undefined){
      delete newMOD[mealNum]
      this.setState({
        MOD:newMOD             
      })
    } else{ 
        console.log(meal)
        MealApiService.deleteMeal(meal)
          .then(res =>{
            console.log(res)
            delete newMOD[mealNum]
            this.setState({
              MOD:newMOD
            })
          })
      }
  }





renderMealOfDay(...x){
  let html = x.map((i, index) => { 
    if(i !== undefined){
      return(
        <MealItem meal_name={i.meal_name} onDelete={this.deleteMeal} id ={i.id}key={index} mealNum={index}/> 
        )
      }
      return null 
    })
    return html;
  }

  showBrowser = e =>{
      this.setState({
          isBrowsing:!this.state.isBrowsing,
          viewingBookmarks:false,
      })
  }

  showBookmarks = e =>{
  
    this.setState({
      viewingBookmarks:!this.state.viewingBookmarks,
      isBrowsing:false,
    })
  }

   

    render(){
        const date =this.state.date
        const mealOfDay= this.state.MOD
        // const mealOfDay= this.context.mealOfDay
        
      
       
      
        return(
        <div className='add-meal-form'>
          { this.renderMealOfDay(...mealOfDay)} 
          
            <div className='add_meal_form'>
              <AddMealForm date={date} handleSubmit={this.handleSubmit}/>
              </div>
             <div className='alt-comp'> 
            {/* <button className='add_meal_btn'>
              View Meal History
            </button> */}
            <button className='add_meal_btn' onClick={this.showBookmarks}>
                View Meal Bookmarks
            </button>
            <button className='add_meal_btn' onClick={this.showBrowser}>
                Browse Meal for Ideas
            </button><br/>
            {this.state.isBrowsing && <MealBrowserForm showMod={this.clearAndSetMOD} date={date}   />} 
            {this.state.viewingBookmarks && <Bookmarks date={date}/>}
           </div>
           </div> 
        )
    }
}



// must have a back button


