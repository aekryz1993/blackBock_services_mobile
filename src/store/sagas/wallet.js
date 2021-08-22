import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchCredit} from '@apis/wallet';
import {
  fetchcreditSucced,
  fetchcreditFailed,
  FETCHCREDIT_REQUEST,
} from '@actions/wallet';

function* fetchCreditFlow($action) {
  try {
    const token = yield call(fetchCredit);
    yield put(fetchcreditSucced(token));
  } catch (error) {
    yield put(fetchcreditFailed(error));
  }
}

export function* watchFetchCredit() {
  yield takeEvery(FETCHCREDIT_REQUEST, fetchCreditFlow);
}
