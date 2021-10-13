import {
  FETCHUSERS_SUCCEED,
  FETCHUSERS_FAILED,
  FETCHUSERS_REQUEST,
  FETCHUSERS_REQUEST_ENDED,
  ADDUSER_SUCCEED,
  ADDUSER_FAILED,
  ADDUSER_REQUEST,
  ADDUSER_REQUEST_ENDED,
  UPDATEUSER_SUCCEED,
  UPDATEUSER_FAILED,
  UPDATEUSER_REQUEST,
  UPDATEUSER_REQUEST_ENDED,
  UPDATEPERMISSIONS_SUCCEED,
  UPDATEPERMISSIONS_FAILED,
  UPDATEPERMISSIONS_REQUEST,
  UPDATEPERMISSIONS_REQUEST_ENDED,
  UPDATEWALLET_SUCCEED,
  UPDATEWALLET_FAILED,
  UPDATEWALLET_REQUEST,
  UPDATEWALLET_REQUEST_ENDED,
} from '@actions/users';

const fetchUsersReducer = (
  state = {
    users: [],
    totalPages: 0,
    message: null,
    nextPage: 0,
    totalUsers: 0,
    usersDispatch: () => {},
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
    usersDispatch: () => {},
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

const updateUserReducer = (
  state = {
    message: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case UPDATEUSER_REQUEST:
      return {
        ...state,
      };
    case UPDATEUSER_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEUSER_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEUSER_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const updatePermissionsReducer = (
  state = {
    message: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case UPDATEPERMISSIONS_REQUEST:
      return {
        ...state,
      };
    case UPDATEPERMISSIONS_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEPERMISSIONS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEPERMISSIONS_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const updateWalletReducer = (
  state = {
    message: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case UPDATEWALLET_REQUEST:
      return {
        ...state,
      };
    case UPDATEWALLET_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEWALLET_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATEWALLET_REQUEST_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {
  fetchUsersReducer,
  addUserReducer,
  updateUserReducer,
  updatePermissionsReducer,
  updateWalletReducer,
};
