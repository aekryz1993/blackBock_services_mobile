import {
  FETCHCOMMANDS_SUCCEED,
  FETCHCOMMANDS_FAILED,
  FETCHCOMMANDS_REQUEST,
  FETCHCOMMANDS_ENDED,
  SENDCOMMAND_SUCCEED,
  SENDCOMMAND_FAILED,
  SENDCOMMAND_REQUEST,
  SENDCOMMAND_ENDED,
} from '@actions/commands';

const commandsReducer = (
  state = {
    commands: [],
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
        commands: [...state.commands, ...action.payload.newCommands],
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

const sendCommandReducer = (
  state = {
    message: null,
  },
  action,
) => {
  switch (action.type) {
    case SENDCOMMAND_REQUEST:
      return {
        ...state,
      };
    case SENDCOMMAND_SUCCEED:
      return {
        ...state,
        ...action.payload,
      };
    case SENDCOMMAND_FAILED:
      return {
        ...state,
        message: action.payload.message,
      };
    case SENDCOMMAND_ENDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default {sendCommandReducer, commandsReducer};
