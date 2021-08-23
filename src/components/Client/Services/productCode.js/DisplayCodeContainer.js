import {connect} from 'react-redux';
import DisplayCodes from './DisplayCodes';
import {fetchcreditRequest} from '@actions/wallet';

const mapStateToProps = (state, ownProps) => {
  const {wallet} = state.fetchCreditReducer;
  return {
    walletCredit: wallet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
  };
};

const DisplayCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayCodes);

export default DisplayCodeContainer;
