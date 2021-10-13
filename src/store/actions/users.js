export const FETCHUSERS_REQUEST = 'FETCHUSERS_REQUEST';
export const FETCHUSERS_SUCCEED = 'FETCHUSERS_SUCCEED';
export const FETCHUSERS_FAILED = 'FETCHUSERS_FAILED';
export const FETCHUSERS_REQUEST_ENDED = 'FETCHUSERS_REQUEST_ENDED';

export const fetchUsersRequest = ({page, usersDispatch}) => ({
  type: FETCHUSERS_REQUEST,
  payload: {
    page,
    usersDispatch,
  },
});

export const fetchUsersSucced = response => ({
  type: FETCHUSERS_SUCCEED,
  payload: {
    // users: [...response.currentUsers, ...response.data.users],
    users: response.data.users,
    totalPages: response.data.totalPages,
    nextPage: response.data.nextPage,
    totalUsers: response.data.totalUsers,
    usersDispatch: response.usersDispatch,
  },
});

export const fetchUsersFailed = response => ({
  type: FETCHUSERS_FAILED,
  payload: {
    message: response.message,
  },
});

export const fetchUsersFinished = () => ({
  type: FETCHUSERS_REQUEST_ENDED,
  payload: {
    users: [],
    totalPages: 0,
    message: null,
    nextPage: 0,
    totalUsers: 0,
  },
});

// --------------------- Add User -------------------------------

export const ADDUSER_REQUEST = 'ADDUSER_REQUEST';
export const ADDUSER_SUCCEED = 'ADDUSER_SUCCEED';
export const ADDUSER_FAILED = 'ADDUSER_FAILED';
export const ADDUSER_REQUEST_ENDED = 'ADDUSER_REQUEST_ENDED';

export const addUserRequest = ({body, usersDispatch}) => ({
  type: ADDUSER_REQUEST,
  payload: {
    body,
    usersDispatch,
  },
});

export const addUserSucced = response => ({
  type: ADDUSER_SUCCEED,
  payload: {
    message: response.data.message,
    user: response.data.user,
    usersDispatch: response.usersDispatch,
    success: true,
  },
});

export const addUserFailed = response => ({
  type: ADDUSER_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const addUserFinished = () => ({
  type: ADDUSER_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});

// --------------------- Update User -------------------------------

export const UPDATEUSER_REQUEST = 'UPDATEUSER_REQUEST';
export const UPDATEUSER_SUCCEED = 'UPDATEUSER_SUCCEED';
export const UPDATEUSER_FAILED = 'UPDATEUSER_FAILED';
export const UPDATEUSER_REQUEST_ENDED = 'UPDATEUSER_REQUEST_ENDED';

export const updateUserRequest = ({body, id}) => ({
  type: UPDATEUSER_REQUEST,
  payload: {
    body,
    id,
  },
});

export const updateUserSucced = response => ({
  type: UPDATEUSER_SUCCEED,
  payload: {
    message: response.message,
    success: true,
  },
});

export const updateUserFailed = response => ({
  type: UPDATEUSER_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const updateUserFinished = () => ({
  type: UPDATEUSER_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});

// --------------------- Update Permissions -------------------------------

export const UPDATEPERMISSIONS_REQUEST = 'UPDATEPERMISSIONS_REQUEST';
export const UPDATEPERMISSIONS_SUCCEED = 'UPDATEPERMISSIONS_SUCCEED';
export const UPDATEPERMISSIONS_FAILED = 'UPDATEPERMISSIONS_FAILED';
export const UPDATEPERMISSIONS_REQUEST_ENDED =
  'UPDATEPERMISSIONS_REQUEST_ENDED';

export const updatePermissionsRequest = ({body, id}) => ({
  type: UPDATEPERMISSIONS_REQUEST,
  payload: {
    body,
    id,
  },
});

export const updatePermissionsSucced = response => ({
  type: UPDATEPERMISSIONS_SUCCEED,
  payload: {
    message: response.message,
    success: true,
  },
});

export const updatePermissionsFailed = response => ({
  type: UPDATEPERMISSIONS_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const updatePermissionsFinished = () => ({
  type: UPDATEPERMISSIONS_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});

// --------------------- Update Wallet -------------------------------

export const UPDATEWALLET_REQUEST = 'UPDATEWALLET_REQUEST';
export const UPDATEWALLET_SUCCEED = 'UPDATEWALLET_SUCCEED';
export const UPDATEWALLET_FAILED = 'UPDATEWALLET_FAILED';
export const UPDATEWALLET_REQUEST_ENDED = 'UPDATEWALLET_REQUEST_ENDED';

export const updateWalletRequest = ({body, id}) => ({
  type: UPDATEWALLET_REQUEST,
  payload: {
    body,
    id,
  },
});

export const updateWalletSucced = response => ({
  type: UPDATEWALLET_SUCCEED,
  payload: {
    message: response.message,
    success: true,
  },
});

export const updateWalletFailed = response => ({
  type: UPDATEWALLET_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const updateWalletFinished = () => ({
  type: UPDATEWALLET_REQUEST_ENDED,
  payload: {
    message: null,
    success: false,
  },
});
