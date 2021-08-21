export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCEED = 'ORDER_SUCCEED';
export const ORDER_FAILED = 'ORDER_FAILED';

export const orderRequest = ({currency, order, amount}) => ({
  type: ORDER_REQUEST,
  payload: {
    currency,
    order,
    amount,
  },
});

export const orderSucced = response => ({
  type: ORDER_SUCCEED,
  payload: {
    codes: response.data.codes,
    commands: response.data.commands,
  },
});

export const orderFailed = response => ({
  type: ORDER_FAILED,
  payload: {
    message: response.message,
  },
});
