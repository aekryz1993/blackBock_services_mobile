export const FETCHCOMMANDS_REQUEST = 'FETCHCOMMANDS_REQUEST';
export const FETCHCOMMANDS_SUCCEED = 'FETCHCOMMANDS_SUCCEED';
export const FETCHCOMMANDS_FAILED = 'FETCHCOMMANDS_FAILED';

export const fetchCommandsRequest = () => ({
  type: FETCHCOMMANDS_REQUEST,
});

export const fetchCommandsSucced = response => ({
  type: FETCHCOMMANDS_SUCCEED,
  payload: {
    commandsTreated: response.data.commandsTreated,
    commandsWaiting: response.data.commandsWaiting,
  },
});

export const fetchCommandsFailed = response => ({
  type: FETCHCOMMANDS_FAILED,
  payload: {
    message: response.message,
  },
});
