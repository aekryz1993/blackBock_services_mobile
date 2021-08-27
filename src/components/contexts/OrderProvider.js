import React, {useReducer, createContext} from 'react';

const initialState = {
  navigation: () => {},
  orderFinished: () => {},
  codes: [],
  commands: [],
  fileCodes: '',
  message: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {...state, ...action.payload};
    case 'FAILED':
      return {...state, ...action.payload};
    case 'ENDED':
      return {...state, ...action.payload};
    default:
      return {...state};
  }
};

export const OrderContext = createContext({
  orderState: initialState,
  orderDispatch: () => null,
});

export const OrderProvider = ({children}) => {
  const [orderState, orderDispatch] = useReducer(reducer, initialState);

  return (
    <OrderContext.Provider value={[orderState, orderDispatch]}>
      {children}
    </OrderContext.Provider>
  );
};
