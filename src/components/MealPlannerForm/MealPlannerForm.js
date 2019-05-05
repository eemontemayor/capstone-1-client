import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar.js'
import ApiContext from '../../context/meals-context'


export default class MealPlannerForm extends Component{
    state={
      calendarLength: []
    }
      static contextType = ApiContext

    handleSubmit=(ev)=>{  // not using this any function anymore..  rendering the calendar by month now
      
      ev.preventDefault()
    
      const {calendarLength}= ev.target
      console.log(calendarLength.value) 
    
    }


      handleChange = (e) => {
        this.setState({
          calendarLength: parseInt(e.target.value)
        });
      }
  render() {
   
    return (
      <div>
        <form  onSubmit={this.handleSubmit.bind(this)}>
         <select name="calendarLength" required onChange={this.handleChange.bind(this)}> 
        <option value = "null">...</option>
        <option value= "1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
        <option value="4">4 weeks</option>
      </select>
      <button type="submit" >save</button>
      </form>
        <Calendar
        calendarLength={this.state.calendarLength}
        />
      </div>
    );
  }
}

