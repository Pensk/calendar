import React from 'react';
import ReactDOM from 'react-dom';

import axios from '../lib/axios';

import DatePicker from './datepicker';
import Schedule from './schedule';
import UserSelect from './userselect';

class Calendar extends React.Component {
	constructor(props) {
		super(props);

    const date = new Date(this.props.date);

    this.state = {date, user: null, userId: null};

    this.changeDate = this.changeDate.bind(this);
    this.setUser =  this.setUser.bind(this);
	}

  changeDate(date) {
    this.setState({date: date});
  }

  setUser(user) {
    axios.post('/users/create', {
      username: user
    }).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }

	render() {
		return(
			<div className="calendar container">
				<h1>Calendar</h1>
        <UserSelect user={this.state.user} setUser={this.setUser} />
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
