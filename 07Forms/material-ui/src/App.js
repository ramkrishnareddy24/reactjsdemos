import './App.css';
import BasicTable from './BasicTable';
import LoginForm from './LoginForm';
import LoginFormControlled from './LoginFormControlled';
import NavBar from './NavBar';
import Layout from './pages/Layout';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Outlet } from 'react-router-dom';
import Contact from './pages/Contact';




function App() {
  return (
    <Router>
    <div className='App'>
     
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
    </div>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/blogs" element={<Blogs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
