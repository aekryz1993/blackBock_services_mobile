import {API_HOSTA} from '@env';

export const fetchProductCodesOrder = async ({
  currency,
  order,
  amount,
  serviceName,
  navigation,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/productCode/get/${currency}/${amount}/${order}/${serviceName}`,
        {
          method: 'GET',
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
        navigation,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
