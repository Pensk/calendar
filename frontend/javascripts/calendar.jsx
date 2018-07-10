import React from 'react';
import ReactDOM from 'react-dom';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<h1>Calendar</h1>
			</div>
		);
	}
}



document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('calendar');
  const data = JSON.parse(node.getAttribute('data'));
  ReactDOM.render(
    <Calendar {...data} />,
    node
  );
});

export default Calendar;
