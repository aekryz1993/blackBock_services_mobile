import {
  ADDPRODUCTCATEGORY_REQUEST,
  ADDPRODUCTCATEGORY_SUCCEED,
  ADDPRODUCTCATEGORY_FAILED,
  ADDPRODUCTCATEGORY_REQUEST_ENDED,
} from '@actions/productCategory';

const addProductCategoryReducer = (
  state = {
    message: null,
    label: null,
    serviceName: null,
    success: false,
    categoryDispatch: () => {},
  },
  action,
) => {
  switch (action.type) {
    case ADDPRODUCTCATEGORY_REQUEST:
      return {
        ...state,
      };
    case ADDPRODUCTCATEGORY_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDPRODUCTCATEGORY_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDPRODUCTCATEGORY_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// --------------------- Update Product Category -------------------------------

import {
  UPDATEPRODUCTCATEGORY_REQUEST,
  UPDATEPRODUCTCATEGORY_SUCCEED,
  UPDATEPRODUCTCATEGORY_FAILED,
  UPDATEPRODUCTCATEGORY_REQUEST_ENDED,
} from '@actions/productCategory';

const updateProductCategoryReducer = (
  state = {
    message: null,
    label: null,
    serviceName: null,
    success: false,
    categoryState: {},
    categoryDispatch: () => {},
  },
  action,
) => {
  switch (action.type) {
    case UPDATEPRODUCTCATEGORY_REQUEST:
      return {
        ...state,
      };
    case UPDATEPRODUCTCATEGORY_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEPRODUCTCATEGORY_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEPRODUCTCATEGORY_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {
  addProductCategoryReducer,
  updateProductCategoryReducer,
};
