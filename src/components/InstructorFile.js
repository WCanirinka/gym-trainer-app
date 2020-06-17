import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import getSingleInst from '../helpers/InstructorHelper';
import './styles/InstructorFile.css';

const InstructorFile = props => {
  const { instructors, chngWeek } = props;
  const { id } = useParams();
  const instructor = getSingleInst(instructors, 'instFile');
  const {
    name, instImage, gymName, trainingType, gymImage,
  } = instructor;

  return (
    <div>
      <div className="inst_container">
        <div className="inst_img_container">
          <img src={instImage} alt={name} className="inst_file_img" />
        </div>
        <div className="inst_data_container">
          <div className="inst_data">
            <h1>{name}</h1>
            <h2>
              {`Gym: ${gymName}`}
            </h2>
            <h2>
              {`Training type: ${trainingType}`}
            </h2>
            <Link to={`/instSchedule/${id}`}>
              <button type="button" onClick={() => chngWeek(0)} className="inst_file_btn">
                Instructor&apos;s schedule
              </button>
            </Link>
          </div>
          <div className="trainer_img_container">
            <img src={gymImage} alt={gymName} className="gym_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

InstructorFile.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  chngWeek: PropTypes.func.isRequired,
};

export default InstructorFile;
