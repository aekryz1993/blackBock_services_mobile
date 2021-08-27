import {
  FETCHCOMMANDS_SUCCEED,
  FETCHCOMMANDS_FAILED,
  FETCHCOMMANDS_REQUEST,
} from '@actions/commands';

const commandsReducer = (
  state = {
    commandsTreated: [],
    commandsWaiting: [],
    message: '',
  },
  action,
) => {
  switch (action.type) {
    case FETCHCOMMANDS_REQUEST:
      return {
        ...state,
      };
    case FETCHCOMMANDS_SUCCEED:
      return {
        ...state,
        commandsTreated: action.payload.commandsTreated,
        commandsWaiting: action.payload.commandsWaiting,
      };
    case FETCHCOMMANDS_FAILED:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default commandsReducer;
