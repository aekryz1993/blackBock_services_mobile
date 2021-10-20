import {connect} from 'react-redux';
import {
  updateProductCategoryRequest,
  updateProductCategoryFinished,
} from '@actions/productCategory';
import EditProduct from './EditProduct';

const mapStateToProps = state => {
  const {success, message} = state.updateProductCategoryReducer;
  return {
    success,
    message,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProductCategoryRequest: ({
      body,
      category,
      categoryDispatch,
      serviceName,
      id,
      categoryState,
    }) =>
      dispatch(
        updateProductCategoryRequest({
          body,
          category,
          categoryDispatch,
          serviceName,
          id,
          categoryState,
        }),
      ),
    updateProductCategoryFinished: () =>
      dispatch(updateProductCategoryFinished()),
  };
};
const EditProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProduct);

export default EditProductContainer;
