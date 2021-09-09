import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchCommands, sendCommands} from '@apis/commands';
import {
  fetchCommandsSucced,
  fetchCommandsFailed,
  FETCHCOMMANDS_REQUEST,
  sendCommandSucced,
  sendCommandFailed,
  SENDCOMMAND_REQUEST,
} from '@actions/commands';

function* fetchingCommands($action) {
  try {
    const data = yield call(fetchCommands, {
      page: $action.payload.page,
      isTreated: $action.payload.isTreated,
      isAdmin: $action.payload.isAdmin,
    });
    yield put(fetchCommandsSucced(data));
  } catch (error) {
    yield put(fetchCommandsFailed(error));
  }
}

function* sendingCommand($action) {
  try {
    const data = yield call(sendCommands, {
      userId: $action.payload.userId,
      commandId: $action.payload.commandId,
      categoryId: $action.payload.categoryId,
      excel: $action.payload.excel,
    });
    yield put(sendCommandSucced(data));
  } catch (error) {
    yield put(sendCommandFailed(error));
  }
}

export function* watchCommandOperations() {
  yield takeEvery(FETCHCOMMANDS_REQUEST, fetchingCommands);
  yield takeEvery(SENDCOMMAND_REQUEST, sendingCommand);
}
