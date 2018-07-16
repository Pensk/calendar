import React from 'react';
import axios from '../lib/axios'

const UserForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="form-inline">
      {props.error && <p>There seems to have been an error... Try again</p>}
      <input type="text" placeholder="What's your name?" value={props.username} onChange={props.handleUserNameChange} />
      <input type="submit" value="submit" />
    </form>
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
      <div>
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
