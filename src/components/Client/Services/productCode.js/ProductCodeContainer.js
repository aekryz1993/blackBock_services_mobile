import {connect} from 'react-redux';
import ProductCode from './ProductCode';
import {orderRequest} from '@actions/productCode';

const mapStateToProps = (state, ownProps) => {
  const {codes, commands, message} = state.orderReducer;
  return {
    codes,
    commands,
    message,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    orderRequest: ({currency, order, amount}) =>
      dispatch(orderRequest({currency, order, amount})),
  };
};

const ProductCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCode);

export default ProductCodeContainer;
