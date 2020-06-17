import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Header from '../containers/Header';
import Navbar from '../containers/NavBar';
import Home from './Home';
import InstructorList from './InstructorList';
import InstructorFile from '../containers/InstructorFile';
import InstructorSchedule from '../containers/InstructorSchedule';
import UserSchedule from '../containers/UserSchedule';
import UserAccount from './UserAccount';
import Login from '../containers/Login';
import Signup from './Signup';
import About from './About';
import NoMatch from './NoMatch';
import './styles/App.css';

toast.configure();

const App = props => {
  const {
    user, instructors, editUser,
  } = props;

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Navbar />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Home instructors={instructors} user={user} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup user={user} />
              </Route>
              <Route path="/instructors">
                <InstructorList instructors={instructors} />
              </Route>
              <Route path="/instFile/:id">
                <InstructorFile />
              </Route>
              <Route path="/instSchedule/:id">
                <InstructorSchedule />
              </Route>
              <Route path="/userSchedule">
                <UserSchedule />
              </Route>
              <Route path="/account">
                <UserAccount user={user} editUser={editUser} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  editUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  instructors: [],
};

export default App;
