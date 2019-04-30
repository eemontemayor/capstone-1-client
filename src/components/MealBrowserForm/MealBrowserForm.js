import React, {Component} from 'react';
import { Button, Input, Section } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';

export default class MealBrowserForm extends Component{
    state={
        searchTerm:'',
        searchResuts:[],
    }


    renderResults(...x){
        
        
        let results= x[0].map(i => { 
            let name = i.recipe.label
            return `<h4>${name}</h4>`
          })
        let htmlString= results.map(i => {
            return `<div>${i}</div>`
        })
        return(
           
           console.log(htmlString) 
         
        )
    }


    handleSubmit = e => {
        e.preventDefault()
        this.setState({
           
        })
        console.log(this.state.searchTerm)

        MealApiService.getMeals(this.state.searchTerm)
        .then(res =>{
            
            this.renderResults(res.hits)
            
             
        })
        
    }
    handleChange = (e) => {
        this.setState({
          searchTerm: e.target.value
        });
      }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}
            className='BrowserForm'>           
            <div className='searchTerm'onChange={this.handleChange.bind(this)}>
              <label htmlFor='addMealForm_search_term'>
                Search for:
              </label>
              <input
                required
                type="search"
                name='searchTerm'
               
                id='BrowserForm_search_term'>
              </input>
            </div>
            <div className='dishType'>
              <label htmlFor='dishType'>MealType
              </label>
                <select>
                    <option value="null">...</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </select>
              </div>
              <div className='cuisineType'>
              <label htmlFor='cuisineType'>Cuisine Type
              </label>
                <Input
                name="cuisineType"
                id="BrowserForm_cuisine_search"
                placeholder="Mexican"
                >
                </Input>
              </div>
            <Button type='submit'>
              Search
            </Button>
          </form>
          
               {/* PLACEHOLDER FOR COMPONENT THAT RENDERS RESULTS */}
          
        
            </div>
        )
    }
}