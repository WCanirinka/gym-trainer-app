import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Instructor.module.css';

const Instructor = props => {
  const { instructor } = props;
  const { id, name, instImage } = instructor;

  return (
    <div className={styles.inst_container}>
      <h2>{name.split(' ')[0]}</h2>
      <Link to={`/instFile/${id}`}>
        <button
          className={styles.inst_btn}
          type="button"
        >
          <img src={instImage} alt={name} className={styles.inst_img} />
        </button>
      </Link>
    </div>
  );
};

Instructor.propTypes = {
  instructor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    instImage: PropTypes.string,
  }).isRequired,
};

export default Instructor;
