import {connect} from 'react-redux';
import Commands from './Commands';
import {fetchcreditRequest} from '@actions/wallet';
import {fetchCommandsRequest, fetchCommandsFinished} from '@actions/commands';

const mapStateToProps = (state, ownProps) => {
  const {wallet} = state.fetchCreditReducer;
  const {commands, totalItems, nextPage, totalPages} = state.commandsReducer;

  return {
    walletCredit: wallet,
    commands: commands,
    totalItems,
    nextPage,
    totalPages,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchcreditRequest: () => dispatch(fetchcreditRequest()),
    fetchCommandsRequest: ({page, isTreated}) =>
      dispatch(fetchCommandsRequest({page, isTreated, isAdmin: false})),
    fetchCommandsFinished: () => dispatch(fetchCommandsFinished()),
  };
};

const CommandsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Commands);

export default CommandsContainer;
