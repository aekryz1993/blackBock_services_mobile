import {
  FETCHTopUpServices_SUCCEED,
  FETCHTopUpServices_FAILED,
  FETCHTopUpServices_REQUEST,
  FETCHCodeServices_SUCCEED,
  FETCHCodeServices_FAILED,
  FETCHCodeServices_REQUEST,
} from '@actions/service';

const fetchTopUpReducer = (
  state = {
    topUpServices: [],
    topUpMessage: '',
  },
  action,
) => {
  switch (action.type) {
    case FETCHTopUpServices_REQUEST:
      return {
        ...state,
      };
    case FETCHTopUpServices_SUCCEED:
      return {
        ...state,
        topUpServices: action.payload.services,
      };
    case FETCHTopUpServices_FAILED:
      return {
        ...state,
        topUpMessage: action.payload.message,
      };
    default:
      return state;
  }
};

const fetchCodeReducer = (
  state = {
    codeServices: [],
    message: '',
  },
  action,
) => {
  switch (action.type) {
    case FETCHCodeServices_REQUEST:
      return {
        ...state,
      };
    case FETCHCodeServices_SUCCEED:
      return {
        ...state,
        codeServices: action.payload.services,
      };
    case FETCHCodeServices_FAILED:
      return {
        ...state,
        codeMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default {
  fetchTopUpReducer,
  fetchCodeReducer,
};
