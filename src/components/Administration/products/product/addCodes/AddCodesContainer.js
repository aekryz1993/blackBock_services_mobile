import React from 'react';
import {connect} from 'react-redux';
import {addCodesRequest, addCodesFinished} from '@actions/productCategory';
import AddCodes from './AddCodes';

const mapStateToProps = (state, ownProps) => {
  const {message, success} = state.addCodesReducer;
  return {
    message,
    success,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCodesRequest: ({dataForm, categoryDispatch, serviceName}) =>
      dispatch(
        addCodesRequest({
          dataForm,
          categoryDispatch,
          serviceName,
        }),
      ),
    addCodesFinished: () => dispatch(addCodesFinished()),
  };
};

const AddCodesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => <AddCodes {...props} />);

export default AddCodesContainer;
