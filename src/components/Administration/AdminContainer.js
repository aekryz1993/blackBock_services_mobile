import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => {
  const {loading} = state.loginReducer;
  return {
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutrequest: () => dispatch(logoutrequest()),
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
