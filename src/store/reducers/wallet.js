import {
  FETCHCREDIT_SUCCEED,
  FETCHCREDIT_FAILED,
  FETCHCREDIT_REQUEST,
  CREATECOINBASECHARGE_REQUEST,
  CREATECOINBASECHARGE_SUCCEED,
  CREATECOINBASECHARGE_FAILED,
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

const createCoinbaseChargeReducer = (
  state = {
    coinbasePayUrl: '',
    message: null,
    navigate: () => {},
  },
  action,
) => {
  switch (action.type) {
    case CREATECOINBASECHARGE_REQUEST:
      return {
        ...state,
      };
    case CREATECOINBASECHARGE_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case CREATECOINBASECHARGE_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {fetchCreditReducer, createCoinbaseChargeReducer};
