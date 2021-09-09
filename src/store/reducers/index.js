import {combineReducers} from 'redux';
import loginReducer from './auth';
import fetchUsersReducer from './users';
import service from './service';
import orderReducer from './productCode';
import fetchCreditReducer from './wallet';
import commands from './commands';

const rootReducer = combineReducers({
  loginReducer,
  fetchUsersReducer,
  ...service,
  orderReducer,
  fetchCreditReducer,
  ...commands,
});

export default rootReducer;
