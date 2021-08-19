import {API_HOSTA} from '@env';

export const fetchProductCodesOrder = async ({currency, order}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/productCode/get/${currency}/${order}`,
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
