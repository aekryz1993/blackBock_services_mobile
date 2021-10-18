import React, {useReducer, createContext} from 'react';

const initialCategoryState = {
  topupCategory: [],
  codeCategory: [],
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
          ...action.payload.categoryProduct,
        ],
      };
    case 'UPDATE':
      return {
        ...state,
        [action.payload.label]: [...action.payload.categoryProduct],
      };
    case 'END':
      return {...state, [action.payload.label]: []};
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
