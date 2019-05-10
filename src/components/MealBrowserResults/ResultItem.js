import React, {Component} from 'react';
import './ResultItem.css';
import ApiContext from '../../context/meals-context';
import MealApiService from '../../services/meal-api-service';

export default class ResultItem extends Component{
  constructor(props) {
    super(props);
    this.state = {hidden: false};
  }
  static contextType = ApiContext;


    handleBookmarkSubmit=(ev)=>{
        ev.preventDefault()
        const {meal_name, ingredients, image} = this.props
        const formattedIngredients = []
        for (let i=0; i<ingredients.length; i++){
         formattedIngredients.push(ingredients[i].text) 
        }
        console.log(ingredients)
      MealApiService.postMeal({
        meal_name: meal_name,
        image: image,
        ingredients: formattedIngredients, 
        bookmarked: true
      })
 
      }

      addToCalendar=(ev)=>{ // not keeping it DRY  but will work for now
        ev.preventDefault()
        const {meal_name, ingredients, image, date} = this.props
        const formattedIngredients = []
        for (let i=0; i<ingredients.length; i++){
         formattedIngredients.push(ingredients[i].text) 
        }

        let newMeal={
          meal_name: meal_name,
          image: image,
          ingredients: formattedIngredients, 
          on_day: date,
          bookmarked:false
        }
        this.props.showMod(newMeal, this.props.date)
       
        // MealApiService.postMeal({
        //   meal_name: meal_name,
        //   image: image,
        //   ingredients: formattedIngredients, 
        //   on_day: date,
        //   bookmarked:false
        // })//get response from back end and add those to the functions below
        
        this.context.addMeal(newMeal)
        
      }




      toggleClass(){
        const currentState = this.state.hidden;
        this.setState({
          hidden: !currentState
        });
      };





    render(){
      
   const{ date}=this.props
   const ingredients= this.props.ingredients.map((i, index)=>{
        return <p key={index}>{i.text}</p>
    })
    return(
       
        <div className='result-item'>
        <h4 className='result-item-name'>{this.props.meal_name}</h4>
       <div className='result-item-btn'>{date && <button className='result-item-cal-btn'onClick={this.addToCalendar.bind(this)}>Add Meal to this day</button>}
        <button type="submit" onClick={this.handleBookmarkSubmit.bind(this)}>Save to my bookmarks</button><br/>
        </div>
        <img className='result-item-image' src={this.props.image} alt='x'/><br/>
        
        <div className={this.state.hidden ? 'hidden':null} onClick={this.toggleClass.bind(this)}><button>Hide Ingredients</button><br/>{ingredients}</div> 
        </div>
    )

}
}