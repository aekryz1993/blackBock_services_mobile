import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchAllUsersApi} from '@apis/users';
import {
  fetchUsersSucced,
  fetchUsersFailed,
  FETCHUSERS_REQUEST,
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

export function* watchFetchingUsers() {
  yield takeEvery(FETCHUSERS_REQUEST, fetchingUsers);
}
