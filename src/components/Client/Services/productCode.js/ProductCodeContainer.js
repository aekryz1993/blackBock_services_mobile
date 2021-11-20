import {connect} from 'react-redux';
import ProductCode from './ProductCode';
import {orderRequest} from '@actions/productCode';
import {fetchcreditRequest} from '@actions/wallet';

const mapStateToProps = (state, ownProps) => {
  const {message} = state.orderReducer;
  const {wallet} = state.fetchCreditReducer;
  return {
    message,
    walletCredit: wallet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    orderRequest: ({
      currency,
      order,
      amount,
      serviceName,
      navigation,
      orderDispatch,
      navigate,
    }) =>
      dispatch(
        orderRequest({
          currency,
          order,
          amount,
          serviceName,
          navigation,
          orderDispatch,
          navigate,
        }),
      ),
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
  };
};

const ProductCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCode);

export default ProductCodeContainer;
