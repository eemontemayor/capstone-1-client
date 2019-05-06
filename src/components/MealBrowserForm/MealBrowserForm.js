import React, {Component} from 'react';
import { Button, Input } from '../Utils/Utils';
import MealApiService from '../../services/meal-api-service';
import MealBrowserResults from '../MealBrowserResults/MealBrowserResults';
import { withRouter } from 'react-router-dom';
import ApiContext from '../../context/meals-context';

class MealBrowserForm extends Component{
    state={
      
        searchResults:[],
        date:'',
    }
static contextType = ApiContext

 
handleSubmit = e => {
  e.preventDefault()

  MealApiService.getBrowserMeals(this.state.searchTerm)
    .then(res => {
      this.setState({
          searchResults: res.hits
         
        },()=>{
          console.log(this.state.searchResults)
        }
      )
    })
}


    handleChange = (e) => {
        this.setState({
          searchTerm: e.target.value
        });
      }


    render(){
      const date = this.props.date
      const {searchResults} = this.state
     
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
          
            <MealBrowserResults results={searchResults} date={date} />
          
        
            </div>
        )
    }
}
export default withRouter(MealBrowserForm)