import React, {useReducer, createContext} from 'react';

const initialState = {
  notify: false,
  socketFunctionStat: () => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return {...state, ...action.payload};
    case 'CONNECTED':
      return {...state, ...action.payload};
    case 'DISCONNECTED':
      return {...state, ...action.payload};
    default:
      return {...state};
  }
};

export const SocketContext = createContext({
  socketStat: initialState,
  socketDispatch: () => null,
});

export const SocketProvider = ({children}) => {
  const [socketStat, socketDispatch] = useReducer(reducer, initialState);

  return (
    <SocketContext.Provider value={[socketStat, socketDispatch]}>
      {children}
    </SocketContext.Provider>
  );
};
