export const FETCHCOMMANDS_REQUEST = 'FETCHCOMMANDS_REQUEST';
export const FETCHCOMMANDS_SUCCEED = 'FETCHCOMMANDS_SUCCEED';
export const FETCHCOMMANDS_FAILED = 'FETCHCOMMANDS_FAILED';
export const FETCHCOMMANDS_ENDED = 'FETCHCOMMANDS_ENDED';

export const fetchCommandsRequest = ({page, isTreated}) => ({
  type: FETCHCOMMANDS_REQUEST,
  payload: {
    page,
    isTreated,
  },
});

export const fetchCommandsSucced = response => ({
  type: FETCHCOMMANDS_SUCCEED,
  payload: {
    commandsTreated: response.data.commandsTreated,
    commandsWaiting: response.data.commandsWaiting,
    totalItems: response.data.totalItems,
    totalPages: response.data.totalPages,
    nextPage: response.data.nextPage,
  },
});

export const fetchCommandsFailed = response => ({
  type: FETCHCOMMANDS_FAILED,
  payload: {
    message: response.message,
  },
});

export const fetchCommandsFinished = () => ({
  type: FETCHCOMMANDS_ENDED,
  payload: {
    commandsTreated: [],
    commandsWaiting: [],
    totalItems: 0,
    totalPages: 0,
    nextPage: 0,
    message: null,
    success: false,
  },
});
