import React, {Component} from 'react';
import ApiContext from '../../context/meals-context';
export default class Bookmarks extends Component{
    static contextType = ApiContext

    getBookmarks=()=>{
        let bookmarks = []
        let meals = this.context.meals
   
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