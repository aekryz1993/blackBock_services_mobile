import {connect} from 'react-redux';
import {fetchUsersRequest, fetchUsersFinished} from '@actions/users';
import Users from './Users';

const mapStateToProps = (state, ownProps) => {
  const {nextPage, message} = state.fetchUsersReducer;
  return {
    nextPage,
    message,
    navigation: ownProps.navigation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsersRequest: ({page, usersDispatch}) =>
      dispatch(fetchUsersRequest({page, usersDispatch})),
    fetchUsersFinished: () => dispatch(fetchUsersFinished()),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
