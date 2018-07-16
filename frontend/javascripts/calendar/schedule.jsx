import React from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="schedule">
        <h3>{this.props.date.toDateString()}</h3>
      </div>
    );
  }
}


export default Schedule;
