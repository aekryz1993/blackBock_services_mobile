import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchAllUsersApi, addUserApi} from '@apis/users';
import {
  fetchUsersSucced,
  fetchUsersFailed,
  FETCHUSERS_REQUEST,
  addUserSucced,
  addUserFailed,
  ADDUSER_REQUEST,
} from '@actions/users';

function* fetchingUsers($action) {
  try {
    const token = yield call(
      fetchAllUsersApi,
      $action.payload.page,
      $action.payload.currentUsers,
    );
    yield put(fetchUsersSucced(token));
  } catch (error) {
    yield put(fetchUsersFailed(error));
  }
}

function* addUser($action) {
  try {
    const data = yield call(addUserApi, {
      body: $action.payload.body,
    });
    yield put(addUserSucced(data));
  } catch (error) {
    yield put(addUserFailed(error));
  }
}

export function* watchFetchingUsers() {
  yield takeEvery(FETCHUSERS_REQUEST, fetchingUsers);
  yield takeEvery(ADDUSER_REQUEST, addUser);
}
