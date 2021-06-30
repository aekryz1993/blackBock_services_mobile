import {
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGIN_REQUEST_ENDED,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_ENDED,
  LOGOUT_SUCCEED,
  LOGOUT_FAILED,
} from '@actions/auth';

const loginReducer = (
  state = {
    loading: false,
    isAuth: false,
    message: null,
    isActive: false,
    isAdmin: false,
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCEED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGIN_REQUEST_ENDED:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCEED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGOUT_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGIN_REQUEST_ENDED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
