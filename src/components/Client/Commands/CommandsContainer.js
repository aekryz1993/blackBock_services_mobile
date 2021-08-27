import {connect} from 'react-redux';
import Commands from './Commands';
import {fetchcreditRequest} from '@actions/wallet';
import {fetchCommandsRequest} from '@actions/commands';

const mapStateToProps = (state, ownProps) => {
  const {wallet} = state.fetchCreditReducer;
  const {commandsTreated, commandsWaiting} = state.commandsReducer;
  return {
    walletCredit: wallet,
    commandsTreated: commandsTreated,
    commandsWaiting: commandsWaiting,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
    fetchCommandsRequest: () => dispatch(fetchCommandsRequest()),
  };
};

const CommandsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Commands);

export default CommandsContainer;
