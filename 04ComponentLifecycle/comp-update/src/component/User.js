import React, {Component} from 'react';

class User extends React.Component {
    constructor() {
      super()
      this.state = {
        amount: 2000,
      }
    }
  
    componentDidMount() {
      this.setState({ amount: this.props.amount })
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // previous state
      document.getElementById('previous').innerHTML =
        'Previous Amount: ' + prevState.amount
    }
  
    componentDidUpdate() {
      // current state
      document.getElementById('new').innerHTML =
        'Current Amount: ' + this.state.amount
    }
  
    render() {
      return (
        <div>
          <div id="previous">Previous Amount: </div>
          <div id="new">New Amount: </div>
        </div>
      )
    }
  }

  export default User;