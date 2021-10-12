import {connect} from 'react-redux';
import {fetchUsersFinished} from '@actions/users';
import User from './User';

const mapStateToProps = (state, ownProps) => {
  return {
    navigation: ownProps.navigation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsersFinished: () => dispatch(fetchUsersFinished()),
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
