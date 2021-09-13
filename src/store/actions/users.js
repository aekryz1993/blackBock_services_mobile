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

export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export const NOTIFICATIONS_SUCCEED = 'NOTIFICATIONS_SUCCEED';
export const NOTIFICATIONS_FAILED = 'NOTIFICATIONS_FAILED';
export const NOTIFICATIONS_REQUEST_ENDED = 'NOTIFICATIONS_REQUEST_ENDED';

export const fetchNotificationsRequest = notificationDispatch => ({
  type: NOTIFICATIONS_REQUEST,
  payload: {
    notificationDispatch,
  },
});

export const fetchNotificationsSucced = response => ({
  type: NOTIFICATIONS_SUCCEED,
  payload: {
    notifications: response.data.notifications,
    notificationsCount: response.data.notificationCount,
  },
});

export const fetchNotificationsFailed = response => ({
  type: NOTIFICATIONS_FAILED,
  payload: {
    message: response.message,
  },
});

export const fetchNotificationsFinished = () => ({
  type: NOTIFICATIONS_REQUEST_ENDED,
  payload: {
    notifications: [],
    notificationsCount: 0,
    message: null,
  },
});
