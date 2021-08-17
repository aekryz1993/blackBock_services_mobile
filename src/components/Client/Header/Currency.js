import React, {useReducer} from 'react';
import Dropdown from '@components/material/Dropdown';

const initialState = {currency: 'USD'};

function reducer(_, action) {
  switch (action.type) {
    case 'EUR':
      return {currency: 'EUR'};
    case 'USD':
      return {currency: 'USD'};
    case 'DZD':
      return {currency: 'DZD'};
    default:
      throw new Error();
  }
}

const Currency = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Dropdown text={`Wallet ${state.currency}`} dispatch={dispatch} />
    </>
  );
};

export default Currency;
