import {combineReducers} from 'redux';
import loginReducer from './auth';
import fetchUsersReducer from './users';
import service from './service';

const rootReducer = combineReducers({
  loginReducer,
  fetchUsersReducer,
  ...service,
});

export default rootReducer;
