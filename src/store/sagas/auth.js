import {call, put, takeEvery} from 'redux-saga/effects';
import {loginApi, logoutApi, sessionApi, setupTokenApi} from '@apis/auth';
import {
  loginFailed,
  loginSucced,
  CHECKSESSION_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  logoutFailed,
  logoutSucced,
  authenticatedSession,
  notAuthenticatedSession,
} from '@actions/auth';
import EncryptedStorage from 'react-native-encrypted-storage';

function* checkSession($action) {
  try {
    const response = yield call(sessionApi);
    yield put(authenticatedSession(response));
  } catch (error) {
    yield put(notAuthenticatedSession());
  }
}

function* authorize($action) {
  try {
    const data = yield call(
      loginApi,
      $action.payload.username,
      $action.payload.password,
    );
    const response = yield put(loginSucced(data));
    if (response.payload.isAuth) {
      yield call(setupTokenApi);
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* logout() {
  try {
    const data = yield call(logoutApi);
    yield put(logoutSucced(data));
    (async () => {
      await EncryptedStorage.removeItem('user_session');
    })();
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export function* loginFlow() {
  yield takeEvery(CHECKSESSION_REQUEST, checkSession);
  yield takeEvery(LOGIN_REQUEST, authorize);
  yield takeEvery(LOGOUT_REQUEST, logout);
}
