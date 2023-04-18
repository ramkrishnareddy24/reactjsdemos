import React from 'react'
import PropTypes from 'prop-types';
const Navbar = ({title}) => {
 
    return (
      <nav className='navbar bg-primary text-white'>
      <h4 className='p-2'>{title}</h4>
      </nav>
    )
  
}

Navbar.defaultProps = {
  title: 'GitHub Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar