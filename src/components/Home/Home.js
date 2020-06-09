import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Home.module.css';

const Home = props => {
  const { user } = props;

  const logged = [];
  if (user.logged) {
    logged.push(['/account', 'Account']);
    logged.push(['/how-to-schedule', 'Schedule a class']);
  } else {
    logged.push(['/login', 'Login']);
    logged.push(['/signup', 'Signup']);
  }

  return (
    <div className={styles.home}>
      <h1 className={styles.home_title}>Welcome to Strong Gym</h1>
      <img src="./content/bg-image.jpg" alt="Gym" className={styles.gym_image} />
      <h2 className={styles.home_title}>
        &quot;Come and experience a life changing practice.
        Living healthy and fit is now a norm in today society and it is becoming a need.&quot;
      </h2>
      <h2 className={styles.home_title}>
        And you can come and train with us and live a fulfilled life
      </h2>
      <div className={styles.inst_btn_container}>
        <Link to="/instructors" className={styles.home_inst_btn}>
          <button type="button" className={styles.home_btn}>
            <p className="btn_name">Our Instructors</p>
            <img src="./content/instructors.jpg" alt="Instructors" className={styles.home_img} />
          </button>
        </Link>
        <div className="home_login_btn">
          <Link to={logged[0][0]}>
            <button type="button" className={cx(styles.home_btn, styles.home_login_btn)}>
              <p className="btn_name">{logged[0][1]}</p>
              <img src="/content/login.jpg" alt="Login" className={styles.home_img} />
            </button>
          </Link>
          <Link to={logged[1][0]}>
            <button type="button" className={styles.home_btn}>
              <p className={styles.btn_name}>{logged[1][1]}</p>
              <img src="/content/looking.jpg" alt="Signup" className={styles.home_img} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
};

export default Home;
