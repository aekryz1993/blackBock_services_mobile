import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchProductsApi, addServiceApi} from '@apis/service';
import {
  fetchProductsSucced,
  fetchProductsFailed,
  FETCHPRODUCTS_REQUEST,
  addServiceSucced,
  addServiceFailed,
  ADDSERVICE_REQUEST,
} from '@actions/service';

function* fetchingProducts($action) {
  try {
    const data = yield call(fetchProductsApi, {
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

//---------------------------- Add Service ---------------------------------------

function* addingService($action) {
  try {
    const data = yield call(addServiceApi, {
      productsDispatch: $action.payload.productsDispatch,
      dataForm: $action.payload.dataForm,
      category: $action.payload.category,
      name: $action.payload.name,
    });
    const _action = yield put(addServiceSucced(data));
    yield _action.payload.productsDispatch({
      type: 'ADD',
      payload: {
        label: _action.payload.label,
        product: _action.payload.product,
      },
    });
  } catch (error) {
    yield put(addServiceFailed(error));
  }
}

export function* watchFetchingServices() {
  yield takeEvery(FETCHPRODUCTS_REQUEST, fetchingProducts);
  yield takeEvery(ADDSERVICE_REQUEST, addingService);
}
