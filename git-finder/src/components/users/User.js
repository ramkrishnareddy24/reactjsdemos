import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import Repos from '../repos/Repos';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(this.props.match.params.login);
    getUserRepos(this.props.match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <BrowserRouter forceRefresh={true}>
        <Link to='/' className='btn btn-secondary-outline'>
          Back to Search
        </Link>
      </BrowserRouter>

      <div className='container border'>
        <img
          src={avatar_url}
          alt=''
          className='card-img-top p-3'
          style={{ borderRadius: '50%', height: '200px', width: '200px' }}
        />

        <div className='card' style={{ width: '18rem;' }}>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{location}</p>
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
            <p>
              Hireable:{' '}
              {hireable ? (
                <button className='btn btn-sm btn-success'>Yes</button>
              ) : (
                <button className='btn btn-sm btn-danger'>No</button>
              )}
            </p>
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub
            </a>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                {login && (
                  <Fragment>
                    Username: <strong>{login}</strong>
                  </Fragment>
                )}
              </li>
              <li className='list-group-item'>
                {company && (
                  <Fragment>
                    Company: <strong>{company}</strong>
                  </Fragment>
                )}
              </li>
              <li className='list-group-item'>
                {blog && (
                  <Fragment>
                    Blog: <strong>{blog}</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className='btn btn-primary'>Followers: {followers}</div>
        <div className='btn btn-success'>Following: {following}</div>
        <div className='btn btn-danger'>Public Repos: {public_repos}</div>
        <div className='btn btn-dark'>Public Gists: {public_gists}</div>
      </div>
      <div>
        <h3>Latest Repositories</h3>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
