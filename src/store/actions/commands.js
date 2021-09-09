export const FETCHCOMMANDS_REQUEST = 'FETCHCOMMANDS_REQUEST';
export const FETCHCOMMANDS_SUCCEED = 'FETCHCOMMANDS_SUCCEED';
export const FETCHCOMMANDS_FAILED = 'FETCHCOMMANDS_FAILED';
export const FETCHCOMMANDS_ENDED = 'FETCHCOMMANDS_ENDED';

export const SENDCOMMAND_REQUEST = 'SENDCOMMAND_REQUEST';
export const SENDCOMMAND_SUCCEED = 'SENDCOMMAND_SUCCEED';
export const SENDCOMMAND_FAILED = 'SENDCOMMAND_FAILED';
export const SENDCOMMAND_ENDED = 'SENDCOMMAND_ENDED';

export const fetchCommandsRequest = ({page, isTreated, isAdmin}) => ({
  type: FETCHCOMMANDS_REQUEST,
  payload: {
    page,
    isTreated,
    isAdmin,
  },
});

export const fetchCommandsSucced = response => ({
  type: FETCHCOMMANDS_SUCCEED,
  payload: {
    commands: response.data.commands,
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
    commands: [],
    totalItems: 0,
    totalPages: 0,
    nextPage: 0,
    message: null,
  },
});

// --- Send command actions ---

export const sendCommandRequest = ({userId, commandId, categoryId, excel}) => ({
  type: SENDCOMMAND_REQUEST,
  payload: {
    userId,
    commandId,
    categoryId,
    excel,
  },
});

export const sendCommandSucced = response => ({
  type: SENDCOMMAND_SUCCEED,
  payload: {
    success: response.data.success,
    message: response.data.message,
  },
});

export const sendCommandFailed = response => ({
  type: SENDCOMMAND_FAILED,
  payload: {
    message: response.message,
  },
});

export const sendCommandFinished = () => ({
  type: SENDCOMMAND_ENDED,
  payload: {
    message: null,
  },
});
