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

export default {
  fetchProductsReducer,
};
