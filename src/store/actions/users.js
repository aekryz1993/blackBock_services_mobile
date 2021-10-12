export const FETCHUSERS_REQUEST = 'FETCHUSERS_REQUEST';
export const FETCHUSERS_SUCCEED = 'FETCHUSERS_SUCCEED';
export const FETCHUSERS_FAILED = 'FETCHUSERS_FAILED';
export const FETCHUSERS_REQUEST_ENDED = 'FETCHUSERS_REQUEST_ENDED';

export const fetchUsersRequest = (page, currentUsers) => ({
  type: FETCHUSERS_REQUEST,
  payload: {
    page,
    currentUsers,
  },
});

export const fetchUsersSucced = response => ({
  type: FETCHUSERS_SUCCEED,
  payload: {
    users: [...response.currentUsers, ...response.data.users],
    totalPages: response.data.totalPages,
    nextPage: response.data.nextPage,
    totalUsers: response.data.totalUsers,
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

export const addUserRequest = ({body}) => ({
  type: ADDUSER_REQUEST,
  payload: {
    body,
  },
});

export const addUserSucced = response => ({
  type: ADDUSER_SUCCEED,
  payload: {
    message: response.message,
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
