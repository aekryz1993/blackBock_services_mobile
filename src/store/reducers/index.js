import {combineReducers} from 'redux';
import loginReducer from './auth';
import fetchUsersReducer from './users';
import service from './service';
import orderReducer from './productCode';

const rootReducer = combineReducers({
  loginReducer,
  fetchUsersReducer,
  ...service,
  orderReducer,
});

export default rootReducer;
