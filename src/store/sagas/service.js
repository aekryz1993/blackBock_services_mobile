import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProducts} from '@apis/service';
import {
  fetchProductsSucced,
  fetchProductsFailed,
  FETCHPRODUCTS_REQUEST,
} from '@actions/service';

function* fetchingProducts($action) {
  try {
    const data = yield call(fetchProducts, {
      productsDispatch: $action.payload.productsDispatch,
      label: $action.payload.label,
      category: $action.payload.category,
    });
    const _action = yield put(fetchProductsSucced(data));
    yield _action.payload.productsDispatch({
      type: 'ADDMULTI',
      payload: {
        label: _action.payload.label,
        products: _action.payload[_action.payload.label],
      },
    });
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

export function* watchFetchingServices() {
  yield takeEvery(FETCHPRODUCTS_REQUEST, fetchingProducts);
}
