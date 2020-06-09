import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { login, addUsers } from '../actions';

const mapStateToProps = state => ({ user: state.user, registeredUsers: state.registeredUsers });

const mapDispatchToProps = dispatch => ({
  logIn: user => {
    dispatch(login(user));
  },
  addUsr: user => {
    dispatch(addUsers(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
