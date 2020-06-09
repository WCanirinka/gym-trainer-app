import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInstructors } from '../services/instructor';
import { getClasses } from '../services/classes';
import { getSignedUsers } from '../services/user';
import './styles/NavBar.css';

const NavBar = props => {
  const {
    instructors, addInst, addClassy, addUsr,
  } = props;

  const handleAddInstructor = array => {
    if (array !== []) {
      array.forEach(value => {
        addInst(value);
      });
    }
  };

  const handleAddClasses = array => {
    if (array !== []) {
      array.forEach(value => {
        addClassy(value);
      });
    }
  };

  const handleAddUsers = array => {
    if (array !== []) {
      array.forEach(value => {
        addUsr(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchInstructors = async () => {
      const response = await getInstructors();

      if (mounted) {
        const newArrayInst = [];
        response.forEach(value => {
          newArrayInst.push(value);
        });

        handleAddInstructor(newArrayInst);
      }
    };

    const fetchClasses = async () => {
      const response = await getClasses();

      if (mounted) {
        const newArrayClass = [];
        response.forEach(value => {
          newArrayClass.push(value);
        });

        handleAddClasses(newArrayClass);
      }
    };

    const fetchUsers = async () => {
      const response = await getSignedUsers();

      if (mounted) {
        const newArrayUser = [];
        response.forEach(value => {
          newArrayUser.push(value);
        });

        handleAddUsers(newArrayUser);
      }
    };

    fetchInstructors();
    fetchClasses();
    fetchUsers();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="navbar-container navbar-full navbar-light bg-light">
      <Link to="/" className="navbar-brand">Home</Link>
      <Link to="/instructors" className="navbar-brand">Instructors</Link>
      <ul>
        {instructors.map(inst => (
          <Link to={`/instFile/${inst.id}`} key={inst.id} className="navbar_inst">
            <li>{inst.name.split(' ')[0]}</li>
          </Link>
        ))}
      </ul>
      <Link to="/userSchedule" className="navbar-brand">Your schedule</Link>
      <Link to="/about" className="navbar-brand">About</Link>
    </nav>
  );
};

NavBar.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object),
  addInst: PropTypes.func.isRequired,
  addClassy: PropTypes.func.isRequired,
  addUsr: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  instructors: [],
};

export default NavBar;
