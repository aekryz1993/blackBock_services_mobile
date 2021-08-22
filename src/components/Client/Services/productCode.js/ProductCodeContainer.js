import {connect} from 'react-redux';
import ProductCode from './ProductCode';
import {orderRequest, orderFinished} from '@actions/productCode';

const mapStateToProps = (state, ownProps) => {
  const {codes, commands, message, success} = state.orderReducer;
  return {
    codes,
    commands,
    message,
    success,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    orderRequest: ({currency, order, amount, navigation}) =>
      dispatch(orderRequest({currency, order, amount, navigation})),
    orderFinished: () => dispatch(orderFinished()),
  };
};

const ProductCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCode);

export default ProductCodeContainer;
