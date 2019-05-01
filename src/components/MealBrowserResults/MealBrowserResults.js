import React,{Component} from 'react';

export default class MealBrowserResults extends Component{
    constructor(props){
        super(props);
        
        }
    renderResults(...x){
        console.log(...x)
        let results= x[0].map(i => { 
            let name = i.recipe.label
            return `<h4>${name}</h4>`
            })
     
        return(
            <div>
             {results}
    
            </div>
        )
    }

    render(){
      const{searchResults}= this.props;
        const htmlString = this.renderResults(this.props.results)
        return(
            
            <div>{htmlString}</div>
            )
        }
}