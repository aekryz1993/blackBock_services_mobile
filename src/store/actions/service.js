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
