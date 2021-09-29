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

// ------------------ Create Coinbase Charge ------------------------
export const CREATECOINBASECHARGE_REQUEST = 'CREATECOINBASECHARGE_REQUEST';
export const CREATECOINBASECHARGE_SUCCEED = 'CREATECOINBASECHARGE_SUCCEED';
export const CREATECOINBASECHARGE_FAILED = 'CREATECOINBASECHARGE_FAILED';

export const createCoinbaseChargeRequest = ({amount, navigate}) => ({
  type: CREATECOINBASECHARGE_REQUEST,
  payload: {
    amount,
    navigate,
  },
});

export const createCoinbaseChargeSucced = response => ({
  type: CREATECOINBASECHARGE_SUCCEED,
  payload: {
    coinbasePayUrl: response.data.charge.hosted_url,
    navigate: response.navigate,
    success: response.data.success,
  },
});

export const createCoinbaseChargeFailed = response => ({
  type: CREATECOINBASECHARGE_FAILED,
  payload: {
    message: response.message,
  },
});
