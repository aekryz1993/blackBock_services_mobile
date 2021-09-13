import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import {
  fetchUsersFinished,
  fetchNotificationsFinished,
  fetchNotificationsRequest,
} from '@actions/users';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => {
  const {loading} = state.loginReducer;
  const {notificationCount, notifications} = state.fetchNotificationsReducer;
  return {
    loading: loading,
    notificationCount: notificationCount,
    notifications: notifications,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutrequest: () => dispatch(logoutrequest()),
  fetchUsersFinished: () => dispatch(fetchUsersFinished()),
  fetchNotificationsRequest: () => dispatch(fetchNotificationsRequest()),
  fetchNotificationsFinished: notificationDispatch =>
    dispatch(fetchNotificationsFinished(notificationDispatch)),
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
