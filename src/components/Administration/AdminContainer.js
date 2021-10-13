import React from 'react';
import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import {fetchUsersFinished} from '@actions/users';
import Admin from './Admin';
import {UsersProvider} from '../contexts/Users';

const mapStateToProps = (state, ownProps) => {
  const {loading} = state.loginReducer;
  return {
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutrequest: () => dispatch(logoutrequest()),
  fetchUsersFinished: () => dispatch(fetchUsersFinished()),
});

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <UsersProvider>
    <Admin {...props} />
  </UsersProvider>
));

export default AdminContainer;
