import React from 'react';
import {connect} from 'react-redux';
import {
  addProductCategoryRequest,
  addProductCategoryFinished,
} from '@actions/productCategory';
import AddProduct from './AddProduct';

const mapStateToProps = (state, ownProps) => {
  const {message, success} = state.addProductCategoryReducer;
  return {
    message,
    success,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProductCategoryRequest: ({
      body,
      category,
      categoryDispatch,
      serviceName,
    }) =>
      dispatch(
        addProductCategoryRequest({
          body,
          category,
          categoryDispatch,
          serviceName,
        }),
      ),
    addProductCategoryFinished: () => dispatch(addProductCategoryFinished()),
  };
};

const AddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => <AddProduct {...props} />);

export default AddProductContainer;
