import {
  FETCHUSERS_SUCCEED,
  FETCHUSERS_FAILED,
  FETCHUSERS_REQUEST,
  FETCHUSERS_REQUEST_ENDED,
  NOTIFICATIONS_SUCCEED,
  NOTIFICATIONS_FAILED,
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_REQUEST_ENDED,
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

const fetchNotificationsReducer = (
  state = {
    notifications: [],
    notificationsCount: 0,
    message: null,
  },
  action,
) => {
  switch (action.type) {
    case NOTIFICATIONS_REQUEST:
      return {
        ...state,
      };
    case NOTIFICATIONS_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case NOTIFICATIONS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case NOTIFICATIONS_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {fetchUsersReducer, fetchNotificationsReducer};
