import React, {useReducer, createContext} from 'react';

const initialProductsState = {
  topupProducts: [],
  codeProducts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        [action.payload.label]: [
          action.payload.product,
          ...state[action.payload.label],
        ],
      };
    case 'ADDMULTI':
      return {
        ...state,
        [action.payload.label]: [
          ...state[action.payload.label],
          ...action.payload.products,
        ],
      };
    case 'UPDATE':
      return {
        ...state,
        [action.payload.label]: [...action.payload.products],
      };
    case 'END':
      return {...state, [action.payload.label]: []};
    default:
      return {...state};
  }
};

export const ProductsContext = createContext({
  productsState: initialProductsState,
  productsDispatch: () => null,
});

export const ProductsProvider = ({children}) => {
  const [productsState, productsDispatch] = useReducer(
    reducer,
    initialProductsState,
  );

  return (
    <ProductsContext.Provider value={[productsState, productsDispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};
