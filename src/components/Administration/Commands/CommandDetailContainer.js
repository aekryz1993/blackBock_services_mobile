import {connect} from 'react-redux';
import {sendCommandRequest, sendCommandFinished} from '@actions/commands';
import CommandDetail from './CommandDetail';

const mapStateToProps = (state, ownProps) => {
  const {message} = state.commandsReducer;
  return {
    message: message,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendCommandRequest: ({userId, commandId, categoryId, excel}) =>
      dispatch(sendCommandRequest({userId, commandId, categoryId, excel})),
    sendCommandFinished: () => dispatch(sendCommandFinished()),
  };
};

const CommandDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommandDetail);

export default CommandDetailContainer;
