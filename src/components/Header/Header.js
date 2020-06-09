import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.module.css';

const Header = props => {
  const { user, logOut } = props;

  const handleLogout = () => {
    logOut();
    localStorage.removeItem('localUser');
  };

  if (user.logged) {
    return (
      <header className="header">
        <div className="header-logo-name">
          <Link to="/">
            <button type="button" className="header-button">
              <img src="/content/logo.png" alt="Home" className="header-btn-img" />
            </button>
          </Link>
          <h1>Strong Gym Fitness</h1>
        </div>
        <div className="account-buttons-container">
          <Link to="/account">
            <button type="button" className="account-button">
              {user.name.split(' ')[0]}
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="account-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header-logo-name">
        <Link to="/">
          <button type="button" className="header-button">
            <img src="/content/logo.png" alt="Home" className="header-btn-img" />
          </button>
        </Link>
        <h1>Strong Gym Fitness</h1>
      </div>
      <div>
        <Link to="/login">
          <button type="button" className="account-button">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="account-button"
          >
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};

export default Header;
