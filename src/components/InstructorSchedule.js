import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import getSingleInst from '../helpers/InstructorHelper';
import { CreateRows, getDay } from '../helpers/CalendarHelper';
import { createClass, deleteClass } from '../services/classes';
import './styles/InstructorSchedule.css';

const InstructorsSchedule = props => {
  const {
    user, instructors, classes, registeredUsers, week, addClassy, removeClassy, chngWeek,
  } = props;
  const instructor = getSingleInst(instructors, 'instSchedule');
  const headFormat = 'dddd - MMMM Do';
  const rowFormat = 'YYYY-MM-DDT';

  const handleClick = async (date, id, cancel) => {
    if (cancel) {
      await deleteClass(id);
      removeClassy(id);
    } else {
      const classy = await createClass({
        instuctorID: instructor.id,
        userID: user.id,
        classTime: date,
        status: false,
      });
      addClassy(classy);
    }
  };

  const tableHead = () => {
    const th = [<th key={moment()}>Time</th>];
    for (let i = 0; i < 5; i += 1) {
      const day = moment().add(getDay(i, week), 'days').format(headFormat);
      th.push(<th key={day}>{day}</th>);
    }
    return th;
  };

  const tableRows = () => {
    const tr = [];
    for (let i = 8; i < 18; i += 1) {
      const j = i < 10 ? `0${i}` : i;
      tr.push(<CreateRows
        user={user}
        date={moment().format(`${rowFormat}${j}:00`)}
        week={week}
        clickHandler={handleClick}
        classes={classes.filter(classy => classy.instructor === instructor.id)}
        registeredUsers={registeredUsers}
        key={moment().format(`${rowFormat}${j}:00`)}
      />);
    }
    return tr;
  };

  if (instructor.id === '') {
    return (
      <div>
        <h1 className="my-5">Fetching data. Please wait.</h1>
        <img src="/content/loading.jpg" alt="Fetching" className="fetch_gif" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="cal_title">{`${instructor.name}'s schedule`}</h1>
      <div className="cal_container">
        <Link to={`/instSchedule/${instructor.id}`} className="next_prev width_big">
          <button
            type="button"
            className="home-buttons home-signup-button table-links-buttons"
            onClick={() => chngWeek(-1)}
          >
            <img src="/content/previous.png" alt="Signup" className="table-link-images" />
            <p>Previous Week</p>
          </button>
        </Link>
        <table className="table table-dark table-borderless table-hover">
          <thead className="table-head">
            <tr className="table-rows">
              {tableHead()}
            </tr>
          </thead>
          <tbody>
            {tableRows()}
          </tbody>
        </table>
        <div>
          <Link to={`/instSchedule/${instructor.id}`} className="next_prev width_small">
            <button
              type="button"
              className="home_btn home_signup_btn table-link-buttons"
              onClick={() => chngWeek(-1)}
            >
              <img src="/content/previous.png" alt="Signup" className="table-link-images" />
              <p>Previous Week</p>
            </button>
          </Link>
          <Link to={`/instSchedule/${instructor.id}`} className="next_prev np-right">
            <button
              type="button"
              className="home_btn home_signup_btn table-link-buttons"
              onClick={() => chngWeek(1)}
            >
              <img src="/content/next.png" alt="Signup" className="table-link-images" />
              <p>Next Week</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

InstructorsSchedule.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  registeredUsers: PropTypes.arrayOf(PropTypes.object),
  week: PropTypes.number.isRequired,
  addClassy: PropTypes.func.isRequired,
  removeClassy: PropTypes.func.isRequired,
  chngWeek: PropTypes.func.isRequired,
};

InstructorsSchedule.defaultProps = {
  registeredUsers: [],
};

export default InstructorsSchedule;
