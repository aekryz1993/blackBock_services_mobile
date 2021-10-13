import {connect} from 'react-redux';
import {
  updateUserRequest,
  updateUserFinished,
  updatePermissionsRequest,
  updatePermissionsFinished,
  updateWalletRequest,
  updateWalletFinished,
} from '@actions/users';
import User from './User';

const mapStateToProps = (state, ownProps) => {
  const {message: userMsg, success: userSuccess} = state.updateUserReducer;
  const {message: walletMsg, success: walletSuccess} =
    state.updateWalletReducer;
  const {message: permMsg, success: permSuccess} =
    state.updatePermissionsReducer;
  return {
    userMsg,
    userSuccess,
    permMsg,
    permSuccess,
    walletMsg,
    walletSuccess,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUserRequest: ({body, id}) => dispatch(updateUserRequest({body, id})),
    updateUserFinished: () => dispatch(updateUserFinished()),
    updatePermissionsRequest: ({body, id}) =>
      dispatch(updatePermissionsRequest({body, id})),
    updatePermissionsFinished: () => dispatch(updatePermissionsFinished()),
    updateWalletRequest: ({body, id}) =>
      dispatch(updateWalletRequest({body, id})),
    updateWalletFinished: () => dispatch(updateWalletFinished()),
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
