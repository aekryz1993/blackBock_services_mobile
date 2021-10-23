import {call, put, takeEvery} from 'redux-saga/effects';
import {
  ADDPRODUCTCATEGORY_REQUEST,
  addProductCategorySucced,
  addProductCategoryFailed,
  UPDATEPRODUCTCATEGORY_REQUEST,
  updateProductCategorySucced,
  updateProductCategoryFailed,
  ADDCODES_REQUEST,
  addCodesSucced,
  addCodesFailed,
} from '@actions/productCategory';
import {
  addProductCategoryApi,
  updateProductCategoryApi,
  addCodesApi,
} from '@apis/products';

function* addProductCategory($action) {
  try {
    const data = yield call(addProductCategoryApi, {
      body: $action.payload.body,
      category: $action.payload.category,
      categoryDispatch: $action.payload.categoryDispatch,
      serviceName: $action.payload.serviceName,
    });
    const _action = yield put(addProductCategorySucced(data));
    yield _action.payload.categoryDispatch({
      type: 'ADD',
      payload: {
        label: _action.payload.label,
        product: _action.payload.product,
        serviceName: _action.payload.serviceName,
      },
    });
  } catch (error) {
    yield put(addProductCategoryFailed(error));
  }
}

function* updateProductCategory($action) {
  try {
    const data = yield call(updateProductCategoryApi, {
      body: $action.payload.body,
      category: $action.payload.category,
      categoryDispatch: $action.payload.categoryDispatch,
      serviceName: $action.payload.serviceName,
      categoryState: $action.payload.categoryState,
      id: $action.payload.id,
    });
    const _action = yield put(updateProductCategorySucced(data));

    const otherProducts = _action.payload.categoryState[_action.payload.label][
      _action.payload.serviceName
    ].filter(_product => _product.id !== _action.payload.product.id);

    yield _action.payload.categoryDispatch({
      type: 'UPDATE',
      payload: {
        label: _action.payload.label,
        products: [_action.payload.product, ...otherProducts],
        serviceName: _action.payload.serviceName,
      },
    });
  } catch (error) {
    yield put(updateProductCategoryFailed(error));
  }
}

function* addCodes($action) {
  try {
    const data = yield call(addCodesApi, {
      dataForm: $action.payload.dataForm,
      categoryDispatch: $action.payload.categoryDispatch,
      serviceName: $action.payload.serviceName,
    });
    const _action = yield put(addCodesSucced(data));

    yield _action.payload.categoryDispatch({
      type: 'ADDMULTI',
      payload: {
        label: _action.payload.label,
        products: _action.payload.newCategories,
        serviceName: _action.payload.serviceName,
      },
    });
  } catch (error) {
    yield put(addCodesFailed(error));
  }
}

export function* watchAddingProductCategory() {
  yield takeEvery(ADDPRODUCTCATEGORY_REQUEST, addProductCategory);
  yield takeEvery(UPDATEPRODUCTCATEGORY_REQUEST, updateProductCategory);
  yield takeEvery(ADDCODES_REQUEST, addCodes);
}
