import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { heading: 'Old heading' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ heading: 'brand new heading' });
    }, 2000);
  }

  state = {
    money: 10,
  }

  static getDerivedStateFromProps(props, state){
    return {
      money: 1000,
    }
  }


  render(){
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>{this.state.heading}</h1>
          <p>You have {this.state.money}.</p>
        </header>
      </div>
    )
  }

}

export default App;
