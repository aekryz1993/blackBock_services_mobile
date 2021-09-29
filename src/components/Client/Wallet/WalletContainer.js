import {connect} from 'react-redux';
import Wallet from './Wallet';
import {fetchcreditRequest, createCoinbaseChargeRequest} from '@actions/wallet';

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

const WalletContainer = connect(mapStateToProps, mapDispatchToProps)(Wallet);

export default WalletContainer;
