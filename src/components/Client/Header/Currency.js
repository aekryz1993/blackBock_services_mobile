import React, {useContext} from 'react';
import Dropdown from '@components/material/Dropdown';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';

const Currency = () => {
  const [state, dispatch] = useContext(CurrencyContext);
  return (
    <>
      <Dropdown
        text={`Wallet ${state.currency}`}
        dispatch={dispatch}
        currentCurrency={state.currency}
      />
    </>
  );
};

export default Currency;
