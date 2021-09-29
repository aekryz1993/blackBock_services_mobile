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

export const createCoinbaseCharge = ({amount, navigate}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/userSession/payment/coinbase/${amount}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject(JSON.parse(data));
      }
      resolve({
        data: JSON.parse(data),
        navigate,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
