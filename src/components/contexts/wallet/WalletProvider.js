import React, {useReducer, createContext} from 'react';

// ----------------------------- Fetch Payments --------------------------------------
const initialFetchPaymentsState = {
  payments: [],
  message: null,
  success: false,
};

export const fetchPaymentsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHPAYMENTS_SUCCEED':
      return {
        ...state,
        payments: action.payload.payments,
        message: null,
        success: true,
      };
    case 'FETCHPAYMENTS_FAILED':
      return {
        ...state,
        payments: [],
        message: action.payload.message,
        success: false,
      };
    case 'FETCHPAYMENTS_ENDED':
      return {...state, payments: [], message: null, success: false};
    default:
      return {...state};
  }
};

const FetchPaymentsContext = createContext({
  fetchPaymentsState: initialFetchPaymentsState,
  fetchPaymentsDispatch: () => null,
});

const FetchPaymentsProvider = ({children}) => {
  const [fetchPaymentsState, fetchPaymentsDispatch] = useReducer(
    fetchPaymentsReducer,
    initialFetchPaymentsState,
  );

  return (
    <FetchPaymentsContext.Provider
      value={[fetchPaymentsState, fetchPaymentsDispatch]}>
      {children}
    </FetchPaymentsContext.Provider>
  );
};

export default {
  FetchPayments: {
    Provider: FetchPaymentsProvider,
    Context: FetchPaymentsContext,
  },
};
