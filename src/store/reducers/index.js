import {combineReducers} from 'redux';
import loginReducer from './auth';
import fetchUsersReducer from './users';

const rootReducer = combineReducers({loginReducer, fetchUsersReducer});

export default rootReducer;
