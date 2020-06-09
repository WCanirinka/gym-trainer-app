import { connect } from 'react-redux';
import { updateUser } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructor,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  editUser: user => {
    dispatch(updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
