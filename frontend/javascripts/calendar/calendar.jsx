import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from './datepicker';
import Schedule from './schedule';

class Calendar extends React.Component {
	constructor(props) {
		super(props);

    this.state = {date: new Date(this.props.date)};

    this.changeDate = this.changeDate.bind(this);
	}

  changeDate(date) {
    this.setState({date: date});
  }

	render() {
		return(
			<div className="calendar container">
				<h1>Calendar</h1>
        <div className="row">
          <div className="col-lg-6">
            <DatePicker
              date={this.state.date}
              changeDate={this.changeDate}
            />
          </div>
          <div className="col-lg-6">
            <Schedule
              date={this.state.date}
            />
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
