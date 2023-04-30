import './App.css';
import React from 'react';
import UserInput from './component/UserInput';

function App() {
  // The data we changed in the view has updated the state.
  // The data in the state has updated the view.
  const [name, setName] = React.useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className='App'>
      {/* <input onChange={handleChange} value={name} />
      <h1>{name}</h1> */}
      <UserInput/>
    </div>
    
  );
}

export default App;
