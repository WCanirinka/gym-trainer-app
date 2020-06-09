import { connect } from 'react-redux';
import { addClass, removeClass, changeWeek } from '../actions';
import InstructorSchedule from '../components/InstructorSchedule';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructor,
  classes: state.classes,
  registeredUsers: state.registeredUsers,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  addClassy: classy => {
    dispatch(addClass(classy));
  },
  removeClassy: classID => {
    dispatch(removeClass(classID));
  },
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorSchedule);
