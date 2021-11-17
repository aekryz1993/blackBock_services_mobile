import React, {useReducer, createContext} from 'react';

const initialState = {currency: '$', attribute: 'dollar', symbol: '$'};

export const reducer = (state, action) => {
  switch (action.type) {
    case '€':
      return {currency: '€', attribute: 'euro', symbol: '€'};
    case '$':
      return {currency: '$', attribute: 'dollar', symbol: '$'};
    case 'دج':
      return {currency: 'دج', attribute: 'dinnar', symbol: 'دج'};
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
