import {API_HOSTA} from '@env';

export const fetchProductCodesOrder = ({
  currency,
  order,
  amount,
  serviceName,
  navigation,
  orderDispatch,
  navigate,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/productCode/get/availableCodes/${currency}/${amount}/${order}/${serviceName}`,
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
        orderDispatch,
        navigate,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
