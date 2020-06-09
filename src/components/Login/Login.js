import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { userLogin } from '../../services/user';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.css';

const Login = props => {
  const {
    user, signedUser, logIn, addUsr,
  } = props;
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleChange = event => {
    if (event.target.id === 'input-email') {
      setEmail(event.target.value);
    } else if (event.target.id === 'input-pass') {
      setPass(event.target.value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await userLogin({ email, pass });
    if (response === false) {
      return (
        <div>
          {toast.error('Error: Not a user')}
          <ToastContainer />
        </div>
      );
    }

    if (response === true) {
      return (
        <div>
          {toast.warn('Password incorrect')}
          <ToastContainer />
        </div>
      );
    }

    logIn({ id: response.id, name: response.name, email: response.email });

    const token = JSON.stringify({
      id: response.id, name: response.name, email: response.email, remember: true,
    });
    localStorage.setItem('localUser', token);

    const tempUser = signedUser.filter(usr => usr.id === response.id);
    if (tempUser.length === 0) addUsr({ id: response.id, name: response.name });

    return (
      <div>
        {toast.success('Login successful')}
        <ToastContainer />
        <Redirect to="/" />
      </div>
    );
  };

  return (
    <div className={styles.login}>
      {user.logged ? <Redirect to="/" /> : null}
      <h1 id="login-message">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">
          Email:
          <input id="input-email" type="email" onChange={handleChange} className="form-control" />
        </label>
        <label htmlFor="password">
          Password:
          <input id="input-pass" type="password" onChange={handleChange} className="form-control" />
        </label>
        <input type="submit" value="Submit" className="btn btn-primary form-control" />
      </form>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.shape({
    logged: PropTypes.bool,
  }).isRequired,
  signedUser: PropTypes.arrayOf(PropTypes.object).isRequired,
  logIn: PropTypes.func.isRequired,
  addUsr: PropTypes.func.isRequired,
};

export default Login;
