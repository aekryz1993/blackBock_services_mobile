import {connect} from 'react-redux';
import {addUserRequest, addUserFinished} from '@actions/users';
import AddUser from './AddUser';

const mapStateToProps = (state, ownProps) => {
  const {message, success} = state.addUserReducer;
  return {
    message,
    success,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserRequest: ({body, usersDispatch}) =>
      dispatch(addUserRequest({body, usersDispatch})),
    addUserFinished: () => dispatch(addUserFinished()),
  };
};

const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default AddUserContainer;
