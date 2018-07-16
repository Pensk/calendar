import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';

import 'react-day-picker/lib/style.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);



    this.scheduledDays = this.props.scheduledDays.map(day =>
        new Date(day)
    );

    this.state = {scheduledDays: this.scheduledDays}

    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day) {
    this.props.changeDate(day);
  }

  render() {
    return(
      <div className="datepicker">
        <DayPicker
          modifiers={{highlighted: this.scheduledDays}}
          onDayClick={this.handleDayClick}
          selectedDays={this.props.date}
        />
      </div>
    );
  }
}

export default DatePicker;
