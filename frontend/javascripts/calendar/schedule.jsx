import React from 'react';
import axios from '../lib/axios';
import moment from 'moment';

const AddEvent = (props) => {
  return(
    <div className="add-event">
      {props.user === null ?
        <p>Choose a name to add an event.</p>
        :
        <form className="form-inline" onSubmit={props.submitEvent}>
          <div className="form-group">
            <input className="form-control" type="text" name="title" placeholder="title" onChange={props.handleChange} />
            <input className="form-control" type="text" name="description" placeholder="description" onChange={props.handleChange} />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="starttime" placeholder="start time (ex 14:00)" onChange={props.handleChange} />
            <input className="form-control" type="text" name="duration" placeholder="duration (min)" onChange={props.handleChange} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-info" value="Add Event" />
          </div>
        </form>

       }
    </div>
  );
}

const Schedules = (props) => {
  const items = props.schedules.map((v, k) =>
    <div className="schedule-item row" key={k}>
      <div className="col-6">
        <h4>{v.title}</h4>
        <p>{v.description}</p>
      </div>
      <div className="col-6">
        <div className="user">by <span className="username">{v.user}</span></div>
        <div className="time">{moment(v.starttime).format('h:mm')} - {moment(v.starttime).add(v.duration, 'minutes').format('h:mm')}</div>
      </div>
    </div>
  );

  return(
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.submitEvent = this.submitEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submitEvent(e) {
    const data = {
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration * 1,
      starttime: this.props.date.format('Y-M-D') + ' ' + this.state.starttime
    }
    e.preventDefault();
    axios.post('/schedules', {
      userId: this.props.userId,
      schedule: data
    }).then(resp => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="schedule">
        <h3>{this.props.date.format('MMMM Do YYYY')}</h3>
        <AddEvent user={this.props.user} handleChange={this.handleChange} submitEvent={this.submitEvent} />
        <Schedules schedules={this.props.schedules} />
      </div>
    );
  }
}


export default Schedule;
