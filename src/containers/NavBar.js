import { connect } from 'react-redux';
import Navbar from '../components/NavBar';
import { addInstructor, addClass, addUsers } from '../actions';

const mapStateToProps = state => ({
  instructors: state.instructor,
  registeredUsers: state.registeredUsers,
});

const mapDispatchToProps = dispatch => ({
  addInst: instructor => {
    dispatch(addInstructor(instructor));
  },
  addClassy: classy => {
    dispatch(addClass(classy));
  },
  addUsr: user => {
    dispatch(addUsers(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
