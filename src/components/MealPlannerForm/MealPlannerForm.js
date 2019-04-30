import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar.js'
// import Calendar from 'react-calendar';


export default class MealPlannerForm extends Component{
   
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
