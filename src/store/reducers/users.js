import {
  FETCHUSERS_SUCCEED,
  FETCHUSERS_FAILED,
  FETCHUSERS_REQUEST,
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
    default:
      return state;
  }
};

export default fetchUsersReducer;
