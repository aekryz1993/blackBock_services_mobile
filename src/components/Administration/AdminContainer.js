import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import {fetchUsersFinished} from '@actions/users';
import Admin from './Admin';

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

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
