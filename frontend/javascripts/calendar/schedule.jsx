import React from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>Schedule</h3>
        {this.props.date.toDateString()}
      </div>
    );
  }
}


export default Schedule;
