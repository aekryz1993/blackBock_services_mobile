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
