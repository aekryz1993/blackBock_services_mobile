import {all, fork} from 'redux-saga/effects';
import {loginFlow} from './auth';
import {watchFetchingUsers} from './users';

export default function* rootSaga() {
  yield all([fork(loginFlow)]);
  yield all([fork(watchFetchingUsers)]);
}
