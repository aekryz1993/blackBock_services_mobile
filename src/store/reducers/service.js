import {
  FETCHPRODUCTS_REQUEST,
  FETCHPRODUCTS_SUCCEED,
  FETCHPRODUCTS_FAILED,
  FETCHPRODUCTS_ENDED,
} from '@actions/service';

const fetchProductsReducer = (
  state = {
    topupProducts: [],
    codeProducts: [],
    topUpMessage: null,
    codeMessage: null,
    productsDispatch: () => {},
    label: null,
  },
  action,
) => {
  switch (action.type) {
    case FETCHPRODUCTS_REQUEST:
      return {
        ...state,
      };
    case FETCHPRODUCTS_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCHPRODUCTS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCHPRODUCTS_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

//---------------------------- Add Service ---------------------------------------

import {
  ADDSERVICE_REQUEST,
  ADDSERVICE_SUCCEED,
  ADDSERVICE_FAILED,
  ADDSERVICE_ENDED,
} from '@actions/service';

const addServiceReducer = (
  state = {
    productsDispatch: () => {},
    label: null,
    product: [],
    success: false,
    message: null,
  },
  action,
) => {
  switch (action.type) {
    case ADDSERVICE_REQUEST:
      return {
        ...state,
      };
    case ADDSERVICE_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDSERVICE_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDSERVICE_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {
  fetchProductsReducer,
  addServiceReducer,
};
