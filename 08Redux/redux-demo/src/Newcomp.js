import React, { Component } from 'react'

export class Newcomp extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello from Simplilearn.!"
        };
    }
    styles = {
        fontStyle: "italic",
        color: "red",
        fontSize: "50px"
    };
    ButtonChange=()=>{
        this.setState({
            message: "Thanks for joining Simplilearn.!!!"
        })
    }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h2 style={this.styles}>{this.state.message}</h2>
        <button onClick={this.ButtonChange}>Subscribe</button>
      </div>
    )
  }
}

export default Newcomp