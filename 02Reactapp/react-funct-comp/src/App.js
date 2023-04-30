import './App.css';
import Example from './comp1/Example';
import Info from './comp1/Info';
import Person from './comp1/Person';
import React, { Component } from 'react';

// class codestudio extends Component {
//   constructor(){
//     super();
//     this.state = {username:"Nishi", city:"Newyork"}
//   }

//   // setState() method triggers UI updates
//   newState=()=>{
//     this.setState({username: "Ram"});
//   }

//   render() {
//     return (
//       <div>
//         <>
//           <h1>Codestudio</h1>
//           <h2>Hello {this.state.username}, Welcome to Simplilearn. please visit our office in {this.state.city}.</h2>
//           <button onClick={this.newState}>Click here to change name.</button>
//           <Example />
//         </>
//       </div>
//     );
//   }
// }

// export default codestudio;

function App() {
  //useState() is a Hook that allows you to have state variables in functional components
  const [name, setName] = React.useState('');

  return (
    <div className='App'>
      <h1>My React App</h1>
      {/* <Person name='Sachin' age={35} />
      <Info skill='React' address='Newyork'></Info> */}

      <form>
        <label htmlFor='name-field'>Name : </label>
        <input id='name-field' value={name}  onChange={event=>{setName(event.target.value);}}/>
      </form>
      <p>
        <strong>Current value : </strong>
        {name || '(empty'}
      </p>
      
    </div>
  );
}


export default App;
