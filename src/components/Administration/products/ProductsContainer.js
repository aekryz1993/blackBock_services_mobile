import {connect} from 'react-redux';
import {fetchProductsRequest} from '@actions/service';
import Products from './Products';

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

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

export default ProductsContainer;
