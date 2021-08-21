import {ORDER_SUCCEED, ORDER_FAILED, ORDER_REQUEST} from '@actions/productCode';

const orderReducer = (
  state = {
    codes: {},
    commands: {},
    message: null,
  },
  action,
) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
      };
    case ORDER_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case ORDER_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
