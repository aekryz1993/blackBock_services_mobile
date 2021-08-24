import {connect} from 'react-redux';
import ProductCode from './ProductCode';
import {orderRequest, orderFinished} from '@actions/productCode';

const mapStateToProps = (state, ownProps) => {
  const {message} = state.orderReducer;
  return {
    message,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    orderRequest: ({currency, order, amount, serviceName, navigation}) =>
      dispatch(
        orderRequest({currency, order, amount, serviceName, navigation}),
      ),
    orderFinished: () => dispatch(orderFinished()),
  };
};

const ProductCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCode);

export default ProductCodeContainer;
