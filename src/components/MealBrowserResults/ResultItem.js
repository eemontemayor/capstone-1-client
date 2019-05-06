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

//TO-DO fix toggle class button for ingredients
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
      })
      // .then(res => {
      //   if (!res.ok)
      //     return res.json().then(e => Promise.reject(e))
      //   return res.json()
      // })
        // .then(meal => {
        //   console.log(meal)
        //   console.log(this.context) // THIS IS RETURNING UNDEFINED
        //   this.context.addMeal(meal) 
        //   this.props.history.push(`/addMeal`)
        // })
      }

      addToCalendar=(ev)=>{ // not keeping it DRY  but will work for now
        ev.preventDefault()
        const {name, ingredients, pic, date} = this.props
        const formattedIngredients = []
        for (let i=0; i<ingredients.length; i++){
         formattedIngredients.push(ingredients[i].text) 
        }

        let newMeal={
          meal_name: name,
          image: pic,
          ingredients: formattedIngredients, 
          on_day: date,
          bookmarked:false
        }
        this.context.addMeal(newMeal)
        this.context.addToCalDay([newMeal])
 
      MealApiService.postMeal({
        meal_name: name,
        image: pic,
        ingredients: formattedIngredients, 
        on_day: date,
        bookmarked:false
       
      })
  
      }




      toggleClass(){
        const currentState = this.state.hidden;
        this.setState({
          hidden: !currentState
        });
      };





    render(){
      console.log(this.props)
   const{ date}=this.props
   const ingredients= this.props.ingredients.map((i, index)=>{
        return <p key={index}>{i.text}</p>
    })
    return(
       
        <div className='result-item'>
        <h4>{this.props.name}</h4>
        <button type="submit" onClick={this.handleBookmarkSubmit.bind(this)}>Save to my bookmarks</button><br/>
        
       
       {date && <button onClick={this.addToCalendar.bind(this)}>Add Meal to this day</button>}
        
        <img src={this.props.pic} alt='x'/><br/>
        
        <div className={this.state.hidden ? 'hidden':null} onClick={this.toggleClass.bind(this)}><button>View Ingredients</button><br/>{ingredients}</div> 
        </div>
    )

}
}