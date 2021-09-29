import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchCredit, createCoinbaseCharge} from '@apis/wallet';
import {
  fetchcreditSucced,
  fetchcreditFailed,
  FETCHCREDIT_REQUEST,
  createCoinbaseChargeSucced,
  createCoinbaseChargeFailed,
  CREATECOINBASECHARGE_REQUEST,
} from '@actions/wallet';

function* fetchCreditFlow() {
  try {
    const data = yield call(fetchCredit);
    yield put(fetchcreditSucced(data));
  } catch (error) {
    yield put(fetchcreditFailed(error));
  }
}

export function* watchFetchCredit() {
  yield takeEvery(FETCHCREDIT_REQUEST, fetchCreditFlow);
}

function* createCoinbaseChargeFlow($action) {
  try {
    const data = yield call(createCoinbaseCharge, {
      amount: $action.payload.amount,
      navigate: $action.payload.navigate,
    });
    const _action = yield put(createCoinbaseChargeSucced(data));
    if (_action.payload.success) {
      yield _action.payload.navigate(_action.payload.coinbasePayUrl);
    }
  } catch (error) {
    yield put(createCoinbaseChargeFailed(error));
  }
}

export function* watchCreateCoinbaseCharge() {
  yield takeEvery(CREATECOINBASECHARGE_REQUEST, createCoinbaseChargeFlow);
}
