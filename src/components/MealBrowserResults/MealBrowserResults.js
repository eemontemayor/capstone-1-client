import React,{Component} from 'react';
import ResultItem from './ResultItem';

export default class MealBrowserResults extends Component{

    renderResults(...x){
        console.log(...x)
        let results= x[0].map((i, index) => { // use map to make an array of components <resultItem/>
            let name = i.recipe.label;
            let pic = i.recipe.image;
            let ingredients= i.recipe.ingredients;
            let instructions= i.recipe.instructions;
            return <ResultItem  name={name} key={index} pic={pic} instructions={instructions} ingredients={ingredients}/>
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