import React, {Component} from 'react';
import { Button, Input } from '../Utils/Utils';
// import Calendar from '../Calendar/Calendar.js'
import Calendar from 'react-calendar';


export default class MealPlannerForm extends Component{
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
   
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
// renders a calendar component
// button to adjust calendar length
// click on a day to add a meal - > leads to addMeal Comp
