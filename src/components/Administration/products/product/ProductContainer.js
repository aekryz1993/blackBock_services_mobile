import {connect} from 'react-redux';
import {fetchProductsRequest} from '@actions/service';
import Product from './Product';

const mapStateToProps = state => {
  const {topupProducts, codeProducts} = state.fetchProductsReducer;
  return {
    topupProducts,
    codeProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsRequest: ({productsDispatch, label, category}) =>
      dispatch(fetchProductsRequest({productsDispatch, label, category})),
  };
};

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
