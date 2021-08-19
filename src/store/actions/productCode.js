export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCEED = 'ORDER_SUCCEED';
export const ORDER_FAILED = 'ORDER_FAILED';

export const orderRequest = ({currency, order}) => ({
  type: ORDER_REQUEST,
  payload: {
    currency,
    order,
  },
});

export const orderSucced = response => ({
  type: ORDER_SUCCEED,
  payload: {
    order: response.data.order,
    currency: response.data.currency,
  },
});

export const orderFailed = response => ({
  type: ORDER_FAILED,
  payload: {
    message: response.message,
  },
});
