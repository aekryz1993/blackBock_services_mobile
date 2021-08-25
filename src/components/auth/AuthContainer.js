import {connect} from 'react-redux';
import {loginRequest, loginRequestEnded} from '@actions/auth';
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
  loginRequestEnded: () => dispatch(loginRequestEnded()),
});

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
