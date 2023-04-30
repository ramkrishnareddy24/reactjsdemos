import './App.css';

function App() {
  function handleClick(e){
    e.preventDefault();
    console.log('Clicked');
  }

  return (
    <div className="App">
      <form onSubmit={handleClick}>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
