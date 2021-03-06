import {all, fork} from 'redux-saga/effects';
import {loginFlow} from './auth';
import {watchFetchingUsers} from './users';
import {watchFetchingServices} from './service';
import {watchOrderProductcode} from './productCode';
import {watchCreateCoinbaseCharge, watchFetchCredit} from './wallet';
import {watchCommandOperations} from './commands';
import {watchAddingProductCategory} from './productCategory';

export default function* rootSaga() {
  yield all([fork(loginFlow)]);
  yield all([fork(watchFetchingUsers)]);
  yield all([fork(watchFetchingServices)]);
  yield all([fork(watchOrderProductcode)]);
  yield all([fork(watchFetchCredit)]);
  yield all([fork(watchCommandOperations)]);
  yield all([fork(watchCreateCoinbaseCharge)]);
  yield all([fork(watchAddingProductCategory)]);
}
