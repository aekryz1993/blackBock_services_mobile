import React, {useReducer, createContext} from 'react';

const initialState = {
  users: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {...state, users: [action.payload.user, ...state.users]};
    case 'ADDMULTI':
      return {...state, users: [...state.users, ...action.payload.users]};
    case 'UPDATE':
      return {...state, users: [...action.payload.users]};
    case 'END':
      return {...state, users: []};
    default:
      return {...state};
  }
};

export const UsersContext = createContext({
  usersState: initialState,
  usersDispatch: () => null,
});

export const UsersProvider = ({children}) => {
  const [usersState, usersDispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={[usersState, usersDispatch]}>
      {children}
    </UsersContext.Provider>
  );
};
