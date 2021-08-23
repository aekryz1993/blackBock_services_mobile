import {connect} from 'react-redux';
import ProductScreen from './ProductScreen';
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

const ProductScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductScreen);

export default ProductScreenContainer;
