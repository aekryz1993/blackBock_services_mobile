export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const CHECKSESSION_REQUEST = 'CHECKSESSION_REQUEST';
export const AUTHEDSESSION = 'AUTHEDSESSION';
export const NOTAUTHEDSESSION = 'NOTAUTHEDSESSION';
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REQUEST_ENDED = 'LOGIN_REQUEST_ENDED';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCEED = 'LOGOUT_SUCCEED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const LOGOUT_REQUEST_ENDED = 'LOGOUT_REQUEST_ENDED';

export const checkSessionRequest = token => ({
  type: CHECKSESSION_REQUEST,
  payload: {
    token,
  },
});

export const authenticatedSession = response => ({
  type: AUTHEDSESSION,
  payload: {
    message: response.message,
    isAuth: response.auth,
    currentUser: response.currentUser,
    profilePic: response.profilePic,
    loading: false,
  },
});

export const notAuthenticatedSession = () => ({
  type: NOTAUTHEDSESSION,
  payload: {
    message: null,
    isAuth: false,
    currentUser: {},
    profilePic: null,
    loading: false,
  },
});

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const loginSucced = response => ({
  type: LOGIN_SUCCEED,
  payload: {
    message: response.message,
    isAuth: response.auth,
    currentUser: response.currentUser,
    profilePic: response.profilePic,
    loading: false,
  },
});

export const loginFailed = response => ({
  type: LOGIN_FAILED,
  payload: {
    message: response.message,
    isAuth: response.auth,
    loading: false,
  },
});

export const logoutrequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSucced = response => ({
  type: LOGOUT_SUCCEED,
  payload: {
    message: null,
    isAuth: response.auth,
    currentUser: {},
    profilePic: null,
    loading: false,
  },
});

export const logoutFailed = response => ({
  type: LOGOUT_FAILED,
  payload: {
    message: null,
    isAuth: response.auth,
    loading: false,
  },
});

export const loginRequestEnded = () => ({
  type: LOGIN_REQUEST_ENDED,
});

export const logoutRequestEnded = () => ({
  type: LOGOUT_REQUEST_ENDED,
});
