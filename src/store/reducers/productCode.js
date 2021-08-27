import {
  ORDER_SUCCEED,
  ORDER_FAILED,
  ORDER_REQUEST,
  ORDER_FINISHED,
} from '@actions/productCode';

const orderReducer = (
  state = {
    codes: [],
    commands: [],
    message: null,
    fileCodes: null,
    success: false,
    navigation: () => {},
    navigate: () => {},
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
    case ORDER_FINISHED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
