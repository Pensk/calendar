import React from 'react';
import axios from '../lib/axios'

const UserForm = (props) => {
  return(
    <div className="user-form">
      {props.error && <p>There seems to have been an error... Try again</p>}
      <form onSubmit={props.handleSubmit} className="form-inline">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="What's your name?" value={props.username} onChange={props.handleUserNameChange} />
          <input className="form-control" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

class UserSelect extends React.Component {
  constructor(props){
    super(props);

    this.state = {username: "", loading: false, error: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true, error: false});
    axios.post('/users', {
      user: {
        username: this.state.username
      }
    }).then(resp => {
      this.props.setUser(resp.data.username, resp.data.id);
      this.setState({loading: false});
    }).catch(error => {
      this.setState({loading: false, error: true});
    });
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  render() {
    const userInfo = this.props.user === null ?
      <UserForm
        handleSubmit={this.handleSubmit}
        username={this.state.username}　
        handleUserNameChange={this.handleUsernameChange}
        error={this.state.error}/>
      :
      <h3>Hi, {this.props.user}!</h3>;

    return(
      <div className="user-select">
        { this.state.loading ?
          <p>Loading ...</p>
          :
          userInfo
        }
      </div>
    );
  }
}

export default UserSelect;
