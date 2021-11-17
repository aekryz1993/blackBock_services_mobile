import {API_HOSTA} from '@env';

export const fetchCredit = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/userSession/wallet/getCredit`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.text();
      resolve({
        data: JSON.parse(data),
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};

export const createOrderApi = ({amount, method}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/userSession/payment/${method}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({amount}),
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject({message: JSON.parse(data).message});
      }
      resolve({
        data: JSON.parse(data),
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};

export const fetchPaymentsOfUserApi = ({currency}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/userSession/payment/payments/${currency}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject({message: JSON.parse(data).message});
      }
      resolve({
        data: JSON.parse(data),
      });
    } catch (error) {
      reject({
        message: error.message,
      });
    }
  });
};
