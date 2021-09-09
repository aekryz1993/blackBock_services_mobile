import {all, fork} from 'redux-saga/effects';
import {loginFlow} from './auth';
import {watchFetchingUsers} from './users';
import {watchFetchingServices} from './service';
import {watchOrderProductcode} from './productCode';
import {watchFetchCredit} from './wallet';
import {watchCommandOperations} from './commands';

export default function* rootSaga() {
  yield all([fork(loginFlow)]);
  yield all([fork(watchFetchingUsers)]);
  yield all([fork(watchFetchingServices)]);
  yield all([fork(watchOrderProductcode)]);
  yield all([fork(watchFetchCredit)]);
  yield all([fork(watchCommandOperations)]);
}
