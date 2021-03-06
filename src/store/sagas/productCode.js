import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProductCodesOrder} from '@apis/products';
import {orderSucced, orderFailed, ORDER_REQUEST} from '@actions/productCode';

function* orderProductcode($action) {
  try {
    const data = yield call(fetchProductCodesOrder, {
      currency: $action.payload.currency,
      order: $action.payload.order,
      amount: $action.payload.amount,
      serviceName: $action.payload.serviceName,
      navigation: $action.payload.navigation,
      orderDispatch: $action.payload.orderDispatch,
      navigate: $action.payload.navigate,
    });
    const _action = yield put(orderSucced(data));
    if (_action.payload.success) {
      yield _action.payload.orderDispatch({
        type: 'SUCCESS',
        payload: {
          codes: _action.payload.codes,
          commands: _action.payload.commands,
          fileCodes: _action.payload.fileCodes,
          message: _action.payload.message,
          navigation: _action.payload.navigation,
        },
      });
      yield _action.payload.navigate();
    }
  } catch (error) {
    yield put(orderFailed(error));
  }
}

export function* watchOrderProductcode() {
  yield takeEvery(ORDER_REQUEST, orderProductcode);
}
