import {connect} from 'react-redux';
import {
  fetchTopUpServicesRequest,
  fetchCodeServicesRequest,
} from '@actions/service';
import Service from './Service';

const mapStateToProps = (state, ownProps) => {
  const {topUpServices, topUpMessage} = state.fetchTopUpReducer;
  const {codeServices, codeMessage} = state.fetchCodeReducer;
  return {
    topUpServices,
    codeServices,
    topUpMessage,
    codeMessage,
    navigation: ownProps.navigation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTopUpServicesRequest: () => dispatch(fetchTopUpServicesRequest()),
    fetchCodeServicesRequest: () => dispatch(fetchCodeServicesRequest()),
  };
};

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service);

export default ServiceContainer;
