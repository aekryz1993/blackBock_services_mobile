import {all, fork} from 'redux-saga/effects';
import {loginFlow} from './auth';
import {watchFetchingUsers} from './users';
import {watchFetchingServices} from './service';

export default function* rootSaga() {
  yield all([fork(loginFlow)]);
  yield all([fork(watchFetchingUsers)]);
  yield all([fork(watchFetchingServices)]);
}
