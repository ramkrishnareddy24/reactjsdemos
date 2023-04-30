import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div
      className='card card-center text-center m-4 border border-black'
      style={{ width: '12rem' }}>
      <img
        src={avatar_url}
        alt=''
        className='card-img-top p-3'
        style={{ borderRadius: '50%' }}
      />
      <h3>{login}</h3>
      <div>
        <BrowserRouter forceRefresh={true}>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
            {' '}
            More{' '}
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
