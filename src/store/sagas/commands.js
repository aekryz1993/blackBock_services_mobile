import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchCommands} from '@apis/commands';
import {
  fetchCommandsSucced,
  fetchCommandsFailed,
  FETCHCOMMANDS_REQUEST,
} from '@actions/commands';

function* fetchingCommands() {
  try {
    const data = yield call(fetchCommands);
    yield put(fetchCommandsSucced(data));
  } catch (error) {
    yield put(fetchCommandsFailed(error));
  }
}

export function* watchFetchingCommands() {
  yield takeEvery(FETCHCOMMANDS_REQUEST, fetchingCommands);
}
