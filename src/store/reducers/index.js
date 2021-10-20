import {combineReducers} from 'redux';
import loginReducer from './auth';
import userReducers from './users';
import serviceReducers from './service';
import orderReducer from './productCode';
import walletReducers from './wallet';
import commandsReducers from './commands';
import productCategoryReducers from './productCategory';

const rootReducer = combineReducers({
  loginReducer,
  ...userReducers,
  ...serviceReducers,
  orderReducer,
  ...walletReducers,
  ...commandsReducers,
  ...productCategoryReducers,
});

export default rootReducer;
