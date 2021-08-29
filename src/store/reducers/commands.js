import {
  FETCHCOMMANDS_SUCCEED,
  FETCHCOMMANDS_FAILED,
  FETCHCOMMANDS_REQUEST,
  FETCHCOMMANDS_ENDED,
} from '@actions/commands';

const commandsReducer = (
  state = {
    commandsTreated: [],
    commandsWaiting: [],
    totalItems: 0,
    totalPages: 0,
    nextPage: 0,
    message: null,
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
        ...action.payload,
      };
    case FETCHCOMMANDS_FAILED:
      return {
        ...state,
        message: action.payload.message,
      };
    case FETCHCOMMANDS_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default commandsReducer;
