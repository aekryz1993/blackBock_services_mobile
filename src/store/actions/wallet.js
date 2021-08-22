export const FETCHCREDIT_REQUEST = 'FETCHCREDIT_REQUEST';
export const FETCHCREDIT_SUCCEED = 'FETCHCREDIT_SUCCEED';
export const FETCHCREDIT_FAILED = 'FETCHCREDIT_FAILED';

export const fetchcreditRequest = () => ({
  type: FETCHCREDIT_REQUEST,
});

export const fetchcreditSucced = response => ({
  type: FETCHCREDIT_SUCCEED,
  payload: {
    wallet: response.data,
  },
});

export const fetchcreditFailed = response => ({
  type: FETCHCREDIT_FAILED,
  payload: {
    message: response.message,
  },
});
