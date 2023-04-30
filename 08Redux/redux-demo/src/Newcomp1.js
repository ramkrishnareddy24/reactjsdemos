import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Newcomp1 extends Component {
  styles = {
    fontStyle: 'italic',
    color: 'red',
    fontSize: '50px',
  };

  ButtonChange = () => {
    this.setState({
      message: 'Thanks for joining Simplilearn.!!!',
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h2 style={this.styles}>{this.state.message}</h2>
        <button onClick={this.ButtonChange}>Subscribe</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ButtonChange: () =>
      dispatch({
        type: 'Message Change',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newcomp1);
