import { combineReducers } from 'redux';
import instructor from './instructor';
import user from './user';
import classes from './classes';
import registeredUsers from './registeredUsers';
import week from './week';

const rootReducer = combineReducers({
  user,
  instructor,
  classes,
  registeredUsers,
  week,
});

export default rootReducer;
