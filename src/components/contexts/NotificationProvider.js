import React, {useReducer, createContext} from 'react';

const initialState = {
  notifications: [],
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        count: action.payload.notificationCount,
      };
    case 'ADD':
      return {
        ...state,
        notifications:
          state.notifications.length === 0
            ? [action.payload]
            : [action.payload, ...state.notifications],
        count: state.count + 1,
      };
    case 'SEEN':
      return {...state, count: 0};
    default:
      return {...state};
  }
};

export const NotificationContext = createContext({
  notificationStat: initialState,
  notificationDispatch: () => null,
});

export const NotificationProvider = ({children}) => {
  const [notificationStat, notificationDispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <NotificationContext.Provider
      value={[notificationStat, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  );
};
