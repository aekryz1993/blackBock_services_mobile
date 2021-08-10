import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import Client from './Client';

const mapStateToProps = (state, ownProps) => {
  const {loading} = state.loginReducer;
  return {
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutrequest: () => dispatch(logoutrequest()),
});

const ClientContainer = connect(mapStateToProps, mapDispatchToProps)(Client);

export default ClientContainer;
