import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchAllUsersApi} from '@apis/users';
import {
  fetchUsersSucced,
  fetchUsersFailed,
  fetchNotificationsSucced,
  fetchNotificationsFailed,
  FETCHUSERS_REQUEST,
  NOTIFICATIONS_REQUEST,
} from '@actions/users';
import {fetchNotificationCount} from '@apis/users';

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

function* fetchingNotifications($action) {
  try {
    const token = yield call(
      fetchNotificationCount,
      $action.payload.notificationDispatch,
    );
    yield token.notificationDispatch({
      type: 'INIT',
      payload: {
        notificationCount: token.data.notificationCount,
        notifications: token.data.notifications,
      },
    });
    yield put(fetchNotificationsSucced(token));
  } catch (error) {
    yield put(fetchNotificationsFailed(error));
  }
}

export function* watchFetchingNotifications() {
  yield takeEvery(NOTIFICATIONS_REQUEST, fetchingNotifications);
}
