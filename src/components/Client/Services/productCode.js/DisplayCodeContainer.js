import {connect} from 'react-redux';
import DisplayCodes from './DisplayCodes';
import {fetchcreditRequest} from '@actions/wallet';
import {orderFinished} from '@actions/productCode';

const mapStateToProps = (state, ownProps) => {
  const {wallet} = state.fetchCreditReducer;
  return {
    walletCredit: wallet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
    orderFinished: () => dispatch(orderFinished()),
  };
};

const DisplayCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayCodes);

export default DisplayCodeContainer;
