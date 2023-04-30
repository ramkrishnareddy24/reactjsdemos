import React, { Component } from 'react';

class UserInput extends Component {
    

  state = { name: 'reactlearn' };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {

    const {name} = this.state;
    
    return <div>
    <h1>{name}</h1>
    <input type = 'text' onChange={this.handleChange}
    value = {name}/>
    </div>;
  }
}

export default UserInput;
