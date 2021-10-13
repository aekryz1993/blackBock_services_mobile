import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchAllUsersApi,
  addUserApi,
  updateUserApi,
  updatePermissionsApi,
  updateWalletApi,
} from '@apis/users';

import {
  fetchUsersSucced,
  fetchUsersFailed,
  FETCHUSERS_REQUEST,
  addUserSucced,
  addUserFailed,
  ADDUSER_REQUEST,
  updateUserSucced,
  updateUserFailed,
  UPDATEUSER_REQUEST,
  updatePermissionsSucced,
  updatePermissionsFailed,
  UPDATEPERMISSIONS_REQUEST,
  updateWalletSucced,
  updateWalletFailed,
  UPDATEWALLET_REQUEST,
} from '@actions/users';

function* fetchingUsers($action) {
  try {
    const data = yield call(fetchAllUsersApi, {
      page: $action.payload.page,
      usersDispatch: $action.payload.usersDispatch,
    });
    const _action = yield put(fetchUsersSucced(data));
    yield _action.payload.usersDispatch({
      type: 'ADDMULTI',
      payload: {users: _action.payload.users},
    });
  } catch (error) {
    yield put(fetchUsersFailed(error));
  }
}

function* addUser($action) {
  try {
    const data = yield call(addUserApi, {
      body: $action.payload.body,
      usersDispatch: $action.payload.usersDispatch,
    });
    const _action = yield put(addUserSucced(data));
    yield _action.payload.usersDispatch({
      type: 'ADD',
      payload: {user: _action.payload.user},
    });
  } catch (error) {
    yield put(addUserFailed(error));
  }
}

function* updateUser($action) {
  try {
    const data = yield call(updateUserApi, {
      body: $action.payload.body,
      id: $action.payload.id,
    });
    yield put(updateUserSucced(data));
  } catch (error) {
    yield put(updateUserFailed(error));
  }
}

function* updatePermissions($action) {
  try {
    const data = yield call(updatePermissionsApi, {
      body: $action.payload.body,
      id: $action.payload.id,
    });
    yield put(updatePermissionsSucced(data));
  } catch (error) {
    yield put(updatePermissionsFailed(error));
  }
}

function* updateWallet($action) {
  try {
    const data = yield call(updateWalletApi, {
      body: $action.payload.body,
      id: $action.payload.id,
    });
    yield put(updateWalletSucced(data));
  } catch (error) {
    yield put(updateWalletFailed(error));
  }
}

export function* watchFetchingUsers() {
  yield takeEvery(FETCHUSERS_REQUEST, fetchingUsers);
  yield takeEvery(ADDUSER_REQUEST, addUser);
  yield takeEvery(UPDATEUSER_REQUEST, updateUser);
  yield takeEvery(UPDATEPERMISSIONS_REQUEST, updatePermissions);
  yield takeEvery(UPDATEWALLET_REQUEST, updateWallet);
}
