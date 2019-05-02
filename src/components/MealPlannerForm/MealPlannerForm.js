import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar.js'
import ApiContext from '../../context/meals-context'


export default class MealPlannerForm extends Component{
      static contextType = ApiContext
  render() {
    return (
      <div>
        <Calendar
     
        />
      </div>
    );
  }
}
// renders a calendar component
// button to adjust calendar length
// click on a day to add a meal - > leads to addMeal Comp
