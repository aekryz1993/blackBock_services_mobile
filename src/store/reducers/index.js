import {combineReducers} from 'redux';
import loginReducer from './auth';
import fetchUsersReducer from './users';
import service from './service';
import orderReducer from './productCode';
import fetchCreditReducer from './wallet';

const rootReducer = combineReducers({
  loginReducer,
  fetchUsersReducer,
  ...service,
  orderReducer,
  fetchCreditReducer,
});

export default rootReducer;
