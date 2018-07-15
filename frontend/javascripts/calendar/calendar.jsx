import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from './datepicker';

class Calendar extends React.Component {
	constructor(props) {
		super(props);

    this.state = {date: props.date};

	}

	render() {
		return(
			<div className="calendar container">
				<h1>Calendar</h1>
        <p>Today's date: {this.state.date}</p>
        <div className="row">
          <div className="col-lg-6">
            <DatePicker />
          </div>
          <div className="col-lg-6">
            Schedule
          </div>
        </div>
			</div>
		);
	}
}



document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('calendar-wrapper');
  const data = JSON.parse(node.getAttribute('data'));
  ReactDOM.render(
    <Calendar {...data} />,
    node
  );
});

export default Calendar;
