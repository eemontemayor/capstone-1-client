import React,{Component} from 'react';
import ResultItem from './ResultItem';

export default class MealBrowserResults extends Component{
 
    renderResults(...x){
        let date = this.props.date; // can I conditionally add this prop? this is only for the case that mealBrowser is accessed through Calendar Comp
        console.log(date)
        let results= x[0].map((i, index) => { // use map to make an array of components <resultItem/>
            let name = i.recipe.label;
            let pic = i.recipe.image;
            let ingredients= i.recipe.ingredients;
         
            return <ResultItem  date={date} name={name} key={index} pic={pic} ingredients={ingredients}/>
            })
        return(
            <div>
             {results}
            </div>
        )
    }
//placeholder for save to bookmarks button which gets passed down to each resultItem comp
    render(){
    
        const htmlString = this.renderResults(this.props.results)
        return(
            
            <div>{htmlString}</div>
            )
        }
}