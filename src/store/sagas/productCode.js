import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProductCodesOrder} from '@apis/products';
import {orderSucced, orderFailed, ORDER_REQUEST} from '@actions/productCode';

function* orderProductcode($action) {
  try {
    const token = yield call(fetchProductCodesOrder, {
      currency: $action.payload.currency,
      order: $action.payload.order,
      amount: $action.payload.amount,
      serviceName: $action.payload.serviceName,
      navigation: $action.payload.navigation,
    });
    const _action = yield put(orderSucced(token));
    if (_action.payload.success) {
      yield _action.payload.navigation({
        codes: _action.payload.codes,
        commands: _action.payload.commands,
        fileCodes: _action.payload.fileCodes,
        message: _action.payload.message,
      });
    }
  } catch (error) {
    yield put(orderFailed(error));
  }
}

export function* watchOrderProductcode() {
  yield takeEvery(ORDER_REQUEST, orderProductcode);
}
