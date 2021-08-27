import {connect} from 'react-redux';
import ProductCode from './ProductCode';
import {orderRequest} from '@actions/productCode';

const mapStateToProps = (state, ownProps) => {
  const {message} = state.orderReducer;
  return {
    message,
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
  };
};

const ProductCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCode);

export default ProductCodeContainer;
