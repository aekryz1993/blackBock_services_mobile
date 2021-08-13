import React, {useReducer} from 'react';
import Dropdown from '@components/material/Dropdown';

const initialState = {currency: 'USD'};

function reducer(_, action) {
  switch (action.type) {
    case 'dollar':
      return {currency: 'USD'};
    case 'euro':
      return {currency: 'EUR'};
    case 'dinnar':
      return {currency: 'DNZ'};
    default:
      throw new Error();
  }
}

const Currency = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Dropdown text={`Wallet ${state.currency}`} />
    </>
  );
};

export default Currency;
