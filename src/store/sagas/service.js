import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchCodeServices, fetchTopUpServices} from '@apis/service';
import {
  fetchTopUpServicesSucced,
  fetchTopUpServicesFailed,
  fetchCodeServicesSucced,
  fetchCodeServicesFailed,
  FETCHTopUpServices_REQUEST,
  FETCHCodeServices_REQUEST,
} from '@actions/service';

function* fetchingTopUpServices() {
  try {
    const data = yield call(fetchTopUpServices);
    yield put(fetchTopUpServicesSucced(data));
  } catch (error) {
    yield put(fetchTopUpServicesFailed(error));
  }
}

function* fetchingCodeServices() {
  try {
    const data = yield call(fetchCodeServices);
    yield put(fetchCodeServicesSucced(data));
  } catch (error) {
    yield put(fetchCodeServicesFailed(error));
  }
}

export function* watchFetchingServices() {
  yield takeEvery(FETCHTopUpServices_REQUEST, fetchingTopUpServices);
  yield takeEvery(FETCHCodeServices_REQUEST, fetchingCodeServices);
}
