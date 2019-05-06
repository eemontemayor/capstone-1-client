import React from "react";
import dateFns from "date-fns";
import './Calendar.css';
import { Link} from 'react-router-dom';
import ApiContext from '../../context/meals-context';
import AddMealPage from "../../routes/AddMealPage";


class Calendar extends React.Component {
  state = {
    currentDay: new Date(),
    currentMonth: new Date(),
    selectedDate: new Date(),
    currentYear: new Date(),
    
    addingMeal: false,
  };
  static contextType = ApiContext;

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

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() { // renders cells for each day of the week
    const {currentYear, currentMonth, selectedDate} = this.state;
    
    const monthStart = dateFns.startOfMonth(currentMonth);
    const startDate = dateFns.startOfWeek(monthStart);

    
    const monthEnd = dateFns.endOfMonth(monthStart);

    
    const endDate = dateFns.endOfWeek(monthEnd)
    
    const dayFormat = "DD";
    const monthFormat="MM";
    const yearFormat="YYYY"
    const rows = [];
   
    let days = [];
    let day= startDate; 
    let month = dateFns.format(currentMonth, monthFormat);
    let year= dateFns.format(currentYear,yearFormat);
    let formattedDate = ""; 
   let formattedDay = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDay = dateFns.format(day, dayFormat);
        formattedDate = `${year}-${month}-${formattedDay}`
        const cloneDay = formattedDate; 
        
        days.push(
          <Link
           to={`/addMeal/${formattedDate}`} 
            className={`col cell ${ 
              dateFns.isPast(day) || !dateFns.isSameMonth(day, monthStart)
                ? "disabled" 
                : dateFns.isSameDay(day, selectedDate) ? "selected" : "" 
            }`}                                                          
            key={day}
            onClick={() => this.onDateClick(cloneDay)}  // clondDay needed because otherwise onClick will always take endDate as clicked value since that's the value of day when loop ends (because we defined day in outer scope)
          >
            <span className="number">{formattedDay}</span>
            <span className="bg">{formattedDay}</span>
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







 
  onDateClick = day => { 
    
      this.context.findMealByDate(day)
       this.setState({
        selectedDate: day,
        addingMeal: true,
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

 

  render(){
    return (
    <div>
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

