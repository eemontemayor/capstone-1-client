import React from "react";
import dateFns from "date-fns";
import './Calendar.css';
import { Link} from 'react-router-dom';


class Calendar extends React.Component {
  state = {
    currentDay: new Date(),
    currentMonth: new Date(),
    selectedDate: new Date(),
    calendarLength: new Date(),
  };

  renderHeader() { 
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() { // renders day names at the top of the col
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);//Return the start of a week for the given date.

    for (let i = 0; i < 7; i++) { //render the jsx for the days in the week
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() { // renders cells for each day of the week
    const { currentDay, selectedDate, calendarLength } = this.state;
    const weekEnd= dateFns.endOfWeek(currentDay)
    const dayStart = dateFns.endOfYesterday(currentDay);
    const endDate = dateFns.addWeeks(weekEnd, calendarLength-1)
    const dateFormat = "D";
    const rows = [];
    
    let days = [];
    let day= dayStart; // renders days in current week
    let formattedDate = "";
   
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day; 
        days.push(
          <Link
           to={`/addMeal/${day}`} 
            className={`col cell ${ 
              dateFns.isPast(day)
                ? "disabled" 
                : dateFns.isSameDay(day, selectedDate) ? "selected" : "" // else if day is the same day as selected Date in our state then add classname selected else add an empty string
            }`}                                                          
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}// clondDay needed because otherwise onClick will always take endDate as clicked value since that's the value of day when loop ends (because we defined day in outer scope)
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </Link>
          
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>; //render the rows
  }

  //================= Event handlers for click events===================//
  onDateClick = day => { 
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  handleChange = (e) => {
    console.log(typeof e.target.value)
  
    this.setState({
      calendarLength: parseInt(e.target.value)
    });
  }

  render() {
    return (
    <div>
      <p>How long do you want to plan for?</p>
      <select name="calendarLength" required onChange={this.handleChange.bind(this)}> 
        <option value = "null">...</option>
        <option value= "1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
        <option value="4">4 weeks</option>
      </select>

      <div className="calendar">
        {this.renderHeader()}
         {this.renderDays()}
        {this.renderCells()} 
      </div>
  
    </div>
    );
  }
}

export default Calendar;

//make each day a link to add meal page
// customize calendar with size adjustor 
// customize calendar to only show present and future weeks

