'use strict';

import {fetchPaymentsOfUserApi} from '@apis/wallet';

export const fetchPayment = ({currency, dispatch}) => {
  (async () => {
    try {
      const response = await fetchPaymentsOfUserApi({currency});
      if (response.data.success) {
        dispatch({
          type: 'FETCHPAYMENTS_SUCCEED',
          payload: {payments: response.data.payments},
        });
      }
    } catch (error) {
      dispatch({
        type: 'FETCHPAYMENTS_FAILED',
        payload: {message: error.message},
      });
    }
  })();
};
