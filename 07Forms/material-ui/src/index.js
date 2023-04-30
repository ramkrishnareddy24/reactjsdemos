import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Layout from './pages/Layout';



const routing = (
  <Router>
    <div>
      <h1>React Router</h1>
      <React path='/' component={Home} />
      <React path='/blog' component={Blogs} />
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
