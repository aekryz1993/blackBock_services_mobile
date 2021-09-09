import {connect} from 'react-redux';
import Commands from './Commands';
import {fetchCommandsRequest, fetchCommandsFinished} from '@actions/commands';

const mapStateToProps = (state, ownProps) => {
  const {commands, totalItems, nextPage, totalPages} = state.commandsReducer;
  return {
    commands: commands,
    totalItems,
    nextPage,
    totalPages,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCommandsRequest: ({page, isTreated}) =>
      dispatch(fetchCommandsRequest({page, isTreated, isAdmin: true})),
    fetchCommandsFinished: () => dispatch(fetchCommandsFinished()),
  };
};

const CommandsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Commands);

export default CommandsContainer;
