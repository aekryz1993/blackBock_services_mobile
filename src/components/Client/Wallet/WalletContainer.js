import React from 'react';
import {connect} from 'react-redux';
import Wallet from './Wallet';
import {fetchcreditRequest, createCoinbaseChargeRequest} from '@actions/wallet';
import WalletProvider from '@components/contexts/wallet/WalletProvider';

const mapStateToProps = (state, ownProps) => {
  const {wallet} = state.fetchCreditReducer;
  const {coinbasePayUrl} = state.createCoinbaseChargeReducer;

  return {
    walletCredit: wallet,
    coinbasePayUrl,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
    createCoinbaseChargeRequest: ({amount, navigate}) =>
      dispatch(createCoinbaseChargeRequest({amount, navigate})),
  };
};

const WalletContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <WalletProvider.FetchPayments.Provider>
    <Wallet {...props} />
  </WalletProvider.FetchPayments.Provider>
));

export default WalletContainer;
