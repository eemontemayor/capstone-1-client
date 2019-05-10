import React,{Component} from 'react';
import ResultItem from './ResultItem';

export default class MealBrowserResults extends Component{
 
    renderResults(...x){
        let date = this.props.date; // can I conditionally add this prop? this is only for the case that mealBrowser is accessed through Calendar Comp
        
        console.log(date)
        let results= x[0].map((i, index) => { // use map to make an array of components <resultItem/>
            let meal_name = i.recipe.label;
            let image = i.recipe.image;
            let ingredients= i.recipe.ingredients;
         
            return <ResultItem showMod={this.props.showMod} date={date} meal_name={meal_name} key={index} image={image} ingredients={ingredients} />
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