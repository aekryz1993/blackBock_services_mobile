import {connect} from 'react-redux';
import {
  fetchTopUpServicesRequest,
  fetchCodeServicesRequest,
} from '@actions/service';
import Service from './Service';
import {fetchcreditRequest} from '@actions/wallet';

const mapStateToProps = (state, ownProps) => {
  const {topUpServices} = state.fetchTopUpReducer;
  const {codeServices} = state.fetchCodeReducer;
  const {wallet} = state.fetchCreditReducer;
  console.log(wallet);
  return {
    topUpServices,
    codeServices,
    wallet,
    navigation: ownProps.navigation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTopUpServicesRequest: () => dispatch(fetchTopUpServicesRequest()),
    fetchCodeServicesRequest: () => dispatch(fetchCodeServicesRequest()),
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
  };
};

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service);

export default ServiceContainer;
