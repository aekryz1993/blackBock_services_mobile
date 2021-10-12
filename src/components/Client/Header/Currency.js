import React from 'react';
import Dropdown from '@components/material/Dropdown';

const Currency = ({
  fetchcreditRequest,
  walletCredit,
  modalVisible,
  setModalVisible,
  state,
}) => {
  return (
    <>
      <Dropdown
        walletCredit={walletCredit}
        fetchcreditRequest={fetchcreditRequest}
        state={state}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default Currency;
