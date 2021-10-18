import React from 'react';
import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import {fetchUsersFinished} from '@actions/users';
import {fetchProductsFinished} from '@actions/service';
import Admin from './Admin';
import {UsersProvider} from '@components/contexts/Users';
import {ProductsProvider} from '@components/contexts/ProductsProvider';

const mapStateToProps = (state, ownProps) => {
  const {loading} = state.loginReducer;
  return {
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutrequest: () => dispatch(logoutrequest()),
  fetchUsersFinished: () => dispatch(fetchUsersFinished()),
  fetchProductsFinished: () => dispatch(fetchProductsFinished()),
});

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <UsersProvider>
    <ProductsProvider>
      <Admin {...props} />
    </ProductsProvider>
  </UsersProvider>
));

export default AdminContainer;
