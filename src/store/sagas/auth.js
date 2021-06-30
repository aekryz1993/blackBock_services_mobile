import {call, put, takeEvery} from 'redux-saga/effects';
import {loginApi, logoutApi} from '@apis/auth';
import {
  loginFailed,
  loginSucced,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  logoutFailed,
  logoutSucced,
} from '@actions/auth';

function* authorize($action) {
  try {
    const token = yield call(
      loginApi,
      $action.payload.username,
      $action.payload.password,
    );
    yield put(loginSucced(token));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* logout() {
  try {
    const data = yield call(logoutApi);
    yield put(logoutSucced(data));
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export function* loginFlow() {
  yield takeEvery(LOGIN_REQUEST, authorize);
  yield takeEvery(LOGOUT_REQUEST, logout);
}
