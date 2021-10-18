import {connect} from 'react-redux';
import {fetchProductsRequest} from '@actions/service';
import Service from './Service';
import {fetchcreditRequest} from '@actions/wallet';

const mapStateToProps = (state, ownProps) => {
  const {topupProducts, codeProducts} = state.fetchProductsReducer;
  const {wallet} = state.fetchCreditReducer;
  return {
    topupProducts,
    codeProducts,
    walletCredit: wallet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductsRequest: ({productsDispatch, label, category}) =>
      dispatch(fetchProductsRequest({productsDispatch, label, category})),
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
  };
};

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service);

export default ServiceContainer;
