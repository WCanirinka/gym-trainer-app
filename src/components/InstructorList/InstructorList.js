import React from 'react';
import PropTypes from 'prop-types';
import Instructor from '../Instructor/Instructor';
import styles from './InstructorList.module.css';

const InstructorsList = props => {
  const { instructors } = props;

  return (
    <div>
      <h1 className="mt-3">Check our Gym Instructors</h1>
      <div className={styles.instructor_list}>
        {instructors && instructors.map(inst => (
          <Instructor key={inst.id} instructor={inst} />
        ))}
      </div>
    </div>
  );
};

InstructorsList.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InstructorsList;
