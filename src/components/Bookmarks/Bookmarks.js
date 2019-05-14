import React, {Component} from 'react';
import ApiContext from '../../context/meals-context';
import MealApiService from '../../services/meal-api-service';


export default class Bookmarks extends Component{
    state={
        meals:[],
    }    
    static contextType = ApiContext


    componentDidMount(){
        MealApiService.getUserMeals()
      .then(meals => {
        this.setState({
          meals:meals
        })
        console.log(this.state)  
      })
      .catch(error =>{
        console.error({error})
      })
    }



    getBookmarks=()=>{
        let bookmarks = []
        let meals = this.state.meals
   
        bookmarks.push(meals.filter(i => i.on_day === null))
        
         return bookmarks
    }
    renderBookmarks=(x)=>{
        console.log(x[0])
        let array = x[0].map((item, index)=>{
            return <div date={this.props.date} meal_name={item.meal_name} key={index} image={item.image} ingredients={item.ingredients[0]}>{item.meal_name}</div>
        })
        console.log('here')
        return array
    }

    render(){
      const bookmarksArray = this.getBookmarks()
     const html = this.renderBookmarks(bookmarksArray)
        return(
            <div>{html}</div>
           
        )
    }
}