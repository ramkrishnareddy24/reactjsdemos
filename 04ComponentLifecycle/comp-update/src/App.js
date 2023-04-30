import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <button onClick={() => this.setState({ show: true })}>Get Users</button>
        {this.state.show ? <User amount="1000" /> : null}
      </div>
    )
  }
}


export default App;
