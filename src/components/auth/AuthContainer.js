import {connect} from 'react-redux';
import {loginRequest, checkSessionRequest} from '@actions/auth';
import Auth from './Auth';

const mapStateToProps = (state, ownProps) => {
  const {loading, isAuth, message, currentUser, profilePic} =
    state.loginReducer;
  return {
    loading: loading,
    isAuth: isAuth,
    message: message,
    isActive: currentUser.isActive,
    isAdmin: currentUser.isAdmin,
    currentUser: currentUser,
    profilePic: profilePic,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginRequest: (username, password) =>
    dispatch(loginRequest(username, password)),
  checkSessionRequest: () => dispatch(checkSessionRequest()),
});

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
