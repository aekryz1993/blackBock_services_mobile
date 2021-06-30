import {connect} from 'react-redux';
import {fetchUsersRequest} from '@actions/users';
import Users from './Users';

const mapStateToProps = (state, ownProps) => {
  const {users, nextPage, message} = state.fetchUsersReducer;
  return {
    users,
    nextPage,
    message,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsersRequest: (page, currentUsers) =>
      dispatch(fetchUsersRequest(page, currentUsers)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
