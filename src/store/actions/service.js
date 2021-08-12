export const FETCHTopUpServices_REQUEST = 'FETCHTopUpServices_REQUEST';
export const FETCHTopUpServices_SUCCEED = 'FETCHTopUpServices_SUCCEED';
export const FETCHTopUpServices_FAILED = 'FETCHTopUpServices_FAILED';

export const FETCHCodeServices_REQUEST = 'FETCHCodeServices_REQUEST';
export const FETCHCodeServices_SUCCEED = 'FETCHCodeServices_SUCCEED';
export const FETCHCodeServices_FAILED = 'FETCHCodeServices_FAILED';

// --------------- TOP UP SERVICES ------------------------

export const fetchTopUpServicesRequest = () => ({
  type: FETCHTopUpServices_REQUEST,
});

export const fetchTopUpServicesSucced = response => ({
  type: FETCHTopUpServices_SUCCEED,
  payload: {
    services: response.data.services,
  },
});

export const fetchTopUpServicesFailed = response => ({
  type: FETCHTopUpServices_FAILED,
  payload: {
    message: response.message,
  },
});

// --------------- CODE SERVICES ------------------------

export const fetchCodeServicesRequest = () => ({
  type: FETCHCodeServices_REQUEST,
});

export const fetchCodeServicesSucced = response => ({
  type: FETCHCodeServices_SUCCEED,
  payload: {
    services: response.data.services,
  },
});

export const fetchCodeServicesFailed = response => ({
  type: FETCHCodeServices_FAILED,
  payload: {
    message: response.message,
  },
});
