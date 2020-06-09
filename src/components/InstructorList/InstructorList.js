import React from 'react';
import PropTypes from 'prop-types';
import Instructor from '../Instructor/Instructor';
import './InstructorList.module.css';

const InstructorList = props => {
  const { instructors } = props;

  return (
    <div>
      <h1 className="mt-3">Check our Gym Instructors</h1>
      <div className="instructor_list">
        {instructors.map(inst => (
          <Instructor key={inst.id} instructor={inst} />
        ))}
      </div>
    </div>
  );
};

InstructorList.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object),
};

InstructorList.defaultProps = {
  instructors: [],
};

export default InstructorList;
