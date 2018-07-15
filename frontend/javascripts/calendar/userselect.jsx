import React from 'react';

const UserForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="form-inline">
      <input type="text" placeholder="What's your name?" value={props.username} onChange={props.handleUserNameChange} />
      <input type="submit" value="submit" />
    </form>
  );
}

class UserSelect extends React.Component {
  constructor(props){
    super(props);

    this.state = {username: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setUser(this.state.username);
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  render() {
    return(
      <div>
        {this.props.user === null ?
          <UserForm
            handleSubmit={this.handleSubmit}
            username={this.state.username}　
            handleUserNameChange={this.handleUsernameChange} />
          :
          <h3>Hi, {this.props.user}!</h3>
        }
      </div>
    );
  }
}

export default UserSelect;
