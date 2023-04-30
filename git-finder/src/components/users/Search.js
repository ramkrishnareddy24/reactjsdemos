import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert}) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('')
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText( e.target.value );

  
    
    return (
      <div className='p-3'>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            className='p-1 m-3'
            value={text}
            onChange={onChange}
          />

          <input type='submit' value='Search' className='btn btn-primary m-0' />
        </form>
        {showClear && (
          <button className='btn btn-secondary m-3' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};


export default Search;
