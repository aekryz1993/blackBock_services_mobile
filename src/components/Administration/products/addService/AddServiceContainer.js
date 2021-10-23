import {connect} from 'react-redux';
import {addServiceRequest, addServiceFinished} from '@actions/service';
import AddService from './AddService';

const mapStateToProps = (state, ownProps) => {
  const {message, success} = state.addServiceReducer;
  return {
    message,
    success,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addServiceRequest: ({dataForm, productsDispatch, category, name}) =>
      dispatch(
        addServiceRequest({
          dataForm,
          productsDispatch,
          category,
          name,
        }),
      ),
    addServiceFinished: () => dispatch(addServiceFinished()),
  };
};

const AddServiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddService);

export default AddServiceContainer;
