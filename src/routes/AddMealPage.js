import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm';


export default class AddMealPage extends Component{

    handleAddMeal= () => {

    }

    render(){
        return(
            <div><AddMealForm/>
            <button>
                Browse Meal for Ideas
            </button>
            <button>
              View Meal History
            </button>
            <button>
                View Meal Bookmarks
            </button>
           </div>
        )
    }
}



// must have a back button
// must have access to history, bookmark, and browser component
// make a calendar bar for the top
