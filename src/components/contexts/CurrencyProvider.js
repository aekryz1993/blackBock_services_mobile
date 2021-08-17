import React, {useReducer, createContext} from 'react';

const initialState = {currency: 'USD', attribute: 'dollar'};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'EUR':
      return {currency: 'EUR', attribute: 'euro'};
    case 'USD':
      return {currency: 'USD', attribute: 'dollar'};
    case 'DZD':
      return {currency: 'DZD', attribute: 'dinnar'};
    default:
      return {...state};
  }
};

export const CurrencyContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const CurrencyProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CurrencyContext.Provider value={[state, dispatch]}>
      {children}
    </CurrencyContext.Provider>
  );
};
