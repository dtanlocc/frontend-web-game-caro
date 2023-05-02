import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/userActions';
import { path } from '../utils';
import caro from '../../src/assets/images/caro.png'
import './Navbar.scss';

const Navbar = ({ isLoggedIn, logout }) => {
  const [setRedirect] = useState(false);

  const handleLogout = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to={path.LOGIN}>Login</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={path.REGISTER}>Sign Up</Link>
      </li>
    </Fragment>
  );

    const authLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to={path.USER}>USER</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={path.ROOM}>Room</Link>
            </li>

            <li className='nav-item'>
                <a className='nav-link' href={path.LOGIN} onClick={handleLogout}>Logout</a>
            </li>
        </Fragment>

    );

  return (
    <Fragment>
      {isLoggedIn ? <Redirect to={path.HOME} /> : null}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to={path.HOME}>
          <img src={caro} alt='Logo' />
          <span>Game Caro</span>
        </Link>
        <button 
          className='navbar-toggler' 
          type='button' 
          data-toggle='collapse' 
          data-target='#navbarNav' 
          aria-controls='navbarNav' 
          aria-expanded='false' 
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            {isLoggedIn ? authLinks() : guestLinks()}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps, { logout })(Navbar);
