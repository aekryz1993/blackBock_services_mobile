export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCEED = 'ORDER_SUCCEED';
export const ORDER_FAILED = 'ORDER_FAILED';
export const ORDER_FINISHED = 'ORDER_FINISHED';

export const orderRequest = ({
  currency,
  order,
  amount,
  serviceName,
  navigation,
  orderDispatch,
  navigate,
}) => ({
  type: ORDER_REQUEST,
  payload: {
    currency,
    order,
    amount,
    navigation,
    serviceName,
    orderDispatch,
    navigate,
  },
});

export const orderSucced = response => ({
  type: ORDER_SUCCEED,
  payload: {
    codes: response.data.codes,
    commands: response.data.commands,
    message: response.data.message,
    fileCodes: response.data.savedFile,
    success: response.data.success,
    navigation: response.navigation,
    navigate: response.navigate,
    orderDispatch: response.orderDispatch,
  },
});

export const orderFailed = response => ({
  type: ORDER_FAILED,
  payload: {
    message: response.message,
  },
});

export const orderFinished = () => ({
  type: ORDER_FINISHED,
  payload: {
    codes: [],
    commands: [],
    message: null,
    success: false,
    navigation: () => {},
    navigate: () => {},
  },
});
