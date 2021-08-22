import React, {useContext} from 'react';
import Dropdown from '@components/material/Dropdown';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';

const Currency = ({fetchcreditRequest, walletCredit}) => {
  const [state, dispatch] = useContext(CurrencyContext);

  return (
    <>
      <Dropdown
        text={`Wallet ${state.currency}`}
        dispatch={dispatch}
        currentCurrency={state.currency}
        walletCredit={walletCredit}
        fetchcreditRequest={fetchcreditRequest}
        state={state}
      />
    </>
  );
};

export default Currency;
