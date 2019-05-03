import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar.js'
import ApiContext from '../../context/meals-context'


export default class MealPlannerForm extends Component{
    state={
      calendarLength: []
    }
      static contextType = ApiContext

    handleSubmit=(ev)=>{
      
      ev.preventDefault()
      //const calendar_id = ph for cal id generator TO-DO make database for calendars
      const {calendarLength}= ev.target
      console.log(calendarLength.value)
      //CalendarApiService.postCalendar({ // calendar_id, })
      // .then(res => {
      //   if (!res.ok)
      //     return res.json().then(e => Promise.reject(e))
      //   return res.json()
      // })
      // .then(calendar => {
      //   this.context.addCalendar(calendar)
      //   this.props.history.push(`/calendar/${cal_id}`) TO-DO make a function that deletes calendar from state if it is in the past.... will probably have to make a route on homepage if current calendar is still valid
      // })
    }


      handleChange = (e) => {
        this.setState({
          calendarLength: parseInt(e.target.value)
        });
      }
  render() {
    const {addCalendar, meals, calendars}= this.context
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

