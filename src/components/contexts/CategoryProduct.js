import React, {useReducer, createContext} from 'react';

const initialCategoryState = {
  topupCategory: {},
  codeCategory: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        [action.payload.label]: {
          ...state[action.payload.label],
          [action.payload.serviceName]: [
            ...state[action.payload.label][action.payload.serviceName],
            action.payload.product,
          ],
        },
      };
    case 'ADDMULTI':
      return {
        ...state,
        [action.payload.label]: {
          ...state[action.payload.label],
          [action.payload.serviceName]: [
            ...state[action.payload.label][action.payload.serviceName],
            ...action.payload.products,
          ],
        },
      };
    case 'UPDATE':
      return {
        ...state,
        [action.payload.label]: {
          ...state[action.payload.label],
          [action.payload.serviceName]: action.payload.products,
        },
      };
    case 'END':
      return {...state, topupCategory: {}, codeCategory: {}};
    default:
      return {...state};
  }
};

export const CategoryContext = createContext({
  categoryState: initialCategoryState,
  categoryDispatch: () => null,
});

export const CategoryProvider = ({children}) => {
  const [categoryState, categoryDispatch] = useReducer(
    reducer,
    initialCategoryState,
  );

  return (
    <CategoryContext.Provider value={[categoryState, categoryDispatch]}>
      {children}
    </CategoryContext.Provider>
  );
};
