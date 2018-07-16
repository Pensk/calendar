import React from 'react';
import axios from '../lib/axios';

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
    e.preventDefault();
    axios.post('/schedules', {
      userId: this.props.userId,
      schedule: this.state
    }).then(resp => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="schedule">
        <h3>{this.props.date.toDateString()}</h3>
        <AddEvent user={this.props.user} handleChange={this.handleChange} submitEvent={this.submitEvent} />
      </div>
    );
  }
}


export default Schedule;
