import {
  FETCHUSERS_SUCCEED,
  FETCHUSERS_FAILED,
  FETCHUSERS_REQUEST,
  FETCHUSERS_REQUEST_ENDED,
  ADDUSER_SUCCEED,
  ADDUSER_FAILED,
  ADDUSER_REQUEST,
  ADDUSER_REQUEST_ENDED,
} from '@actions/users';

const fetchUsersReducer = (
  state = {
    users: [],
    totalPages: 0,
    message: null,
    nextPage: 0,
    totalUsers: 0,
  },
  action,
) => {
  switch (action.type) {
    case FETCHUSERS_REQUEST:
      return {
        ...state,
      };
    case FETCHUSERS_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCHUSERS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCHUSERS_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const addUserReducer = (
  state = {
    message: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case ADDUSER_REQUEST:
      return {
        ...state,
      };
    case ADDUSER_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDUSER_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ADDUSER_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {fetchUsersReducer, addUserReducer};
