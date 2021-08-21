import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProductCodesOrder} from '@apis/products';
import {orderSucced, orderFailed, ORDER_REQUEST} from '@actions/productCode';

function* orderProductcode($action) {
  try {
    const token = yield call(fetchProductCodesOrder, {
      currency: $action.payload.currency,
      order: $action.payload.order,
      amount: $action.payload.amount,
    });
    yield put(orderSucced(token));
  } catch (error) {
    yield put(orderFailed(error));
  }
}

export function* watchOrderProductcode() {
  yield takeEvery(ORDER_REQUEST, orderProductcode);
}
