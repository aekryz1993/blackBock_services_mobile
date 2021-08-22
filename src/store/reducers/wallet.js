import {
  FETCHCREDIT_SUCCEED,
  FETCHCREDIT_FAILED,
  FETCHCREDIT_REQUEST,
} from '@actions/wallet';

const fetchCreditReducer = (
  state = {
    wallet: {dollar: 0, euro: 0, dinnar: 0},
    message: null,
  },
  action,
) => {
  switch (action.type) {
    case FETCHCREDIT_REQUEST:
      return {
        ...state,
      };
    case FETCHCREDIT_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCHCREDIT_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default fetchCreditReducer;
