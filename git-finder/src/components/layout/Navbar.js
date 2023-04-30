import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-dark bg-light border text-dark'>
      <div class='container'>
        <b>{title}</b>
      </div>

      <div className='col-md-1 offset-md-1 text-white'>
        <BrowserRouter forceRefresh={true}>
          <Link to='/'>
            <b>Home</b>
          </Link>
          <br></br>
          <Link to='/about'>
            <b>About</b>
          </Link>
        </BrowserRouter>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
