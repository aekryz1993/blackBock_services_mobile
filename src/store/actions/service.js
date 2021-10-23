export const FETCHPRODUCTS_REQUEST = 'FETCHPRODUCTS_REQUEST';
export const FETCHPRODUCTS_SUCCEED = 'FETCHPRODUCTS_SUCCEED';
export const FETCHPRODUCTS_FAILED = 'FETCHPRODUCTS_FAILED';
export const FETCHPRODUCTS_ENDED = 'FETCHPRODUCTS_ENDED';

export const fetchProductsRequest = ({productsDispatch, label, category}) => ({
  type: FETCHPRODUCTS_REQUEST,
  payload: {
    productsDispatch,
    label,
    category,
  },
});

export const fetchProductsSucced = response => ({
  type: FETCHPRODUCTS_SUCCEED,
  payload: {
    [response.label]: response.data.services,
    productsDispatch: response.productsDispatch,
    label: response.label,
  },
});

export const fetchProductsFailed = response => ({
  type: FETCHPRODUCTS_FAILED,
  payload: {
    [response.label]: response.message,
  },
});

export const fetchProductsFinished = () => {
  return {
    type: FETCHPRODUCTS_ENDED,
    payload: {
      topupProducts: [],
      codeProducts: [],
      topUpMessage: null,
      codeMessage: null,
      productsDispatch: () => {},
      label: null,
    },
  };
};

//---------------------------- Add Service ---------------------------------------

export const ADDSERVICE_REQUEST = 'ADDSERVICE_REQUEST';
export const ADDSERVICE_SUCCEED = 'ADDSERVICE_SUCCEED';
export const ADDSERVICE_FAILED = 'ADDSERVICE_FAILED';
export const ADDSERVICE_ENDED = 'ADDSERVICE_ENDED';

export const addServiceRequest = ({
  dataForm,
  productsDispatch,
  category,
  name,
}) => ({
  type: ADDSERVICE_REQUEST,
  payload: {
    dataForm,
    productsDispatch,
    category,
    name,
  },
});

export const addServiceSucced = response => ({
  type: ADDSERVICE_SUCCEED,
  payload: {
    productsDispatch: response.productsDispatch,
    label: response.label,
    product: response.data.product,
    success: response.data.success,
    message: response.data.message,
  },
});

export const addServiceFailed = response => ({
  type: ADDSERVICE_FAILED,
  payload: {
    message: response.message,
    success: false,
  },
});

export const addServiceFinished = () => {
  return {
    type: ADDSERVICE_ENDED,
    payload: {
      productsDispatch: () => {},
      label: null,
      product: [],
      success: false,
      message: null,
    },
  };
};
