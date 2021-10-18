import React from 'react';
import {connect} from 'react-redux';
import {logoutrequest} from '@actions/auth';
import {fetchProductsFinished} from '@actions/service';
import Client from './Client';
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
  fetchProductsFinished: () => dispatch(fetchProductsFinished()),
});

const ClientContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <UsersProvider>
    <ProductsProvider>
      <Client {...props} />
    </ProductsProvider>
  </UsersProvider>
));

export default ClientContainer;
