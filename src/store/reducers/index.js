import {combineReducers} from 'redux';
import loginReducer from './auth';
import userReducers from './users';
import serviceReducers from './service';
import orderReducer from './productCode';
import fetchCreditReducer from './wallet';
import commandsReducers from './commands';

const rootReducer = combineReducers({
  loginReducer,
  ...userReducers,
  ...serviceReducers,
  orderReducer,
  fetchCreditReducer,
  ...commandsReducers,
});

export default rootReducer;
