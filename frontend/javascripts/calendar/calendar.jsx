import React from 'react';
import ReactDOM from 'react-dom';

import axios from '../lib/axios';
import moment from 'moment';

import DatePicker from './datepicker';
import Schedule from './schedule';
import UserSelect from './userselect';

class Calendar extends React.Component {
	constructor(props) {
		super(props);

    const date = new Date(this.props.date);
    const dateWrapper = moment(date);

    this.state = {date, dateWrapper, user: null, userId: null, schedules: this.props.schedules};

    this.changeDate = this.changeDate.bind(this);
    this.setUser =  this.setUser.bind(this);
	}

  changeDate(date) {
    this.setState({date, dateWrapper: moment(date)});
  }

  setUser(user, userId) {
    this.setState({user, userId});
  }

	render() {
		return(
			<div className="calendar container">
				<h1>Calendar</h1>
        <UserSelect user={this.state.user} setUser={this.setUser} />
        <div className="calendar-row row">
          <div className="col-lg-6">
            <DatePicker
              scheduledDays={this.props.scheduled_days}
              date={this.state.date}
              changeDate={this.changeDate}
            />
          </div>
          <div className="col-lg-6">
            <Schedule
              date={this.state.dateWrapper}
              user={this.state.user}
              userId={this.state.userId}
              schedules={this.state.schedules}
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
