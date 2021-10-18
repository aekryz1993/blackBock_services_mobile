import {API_HOSTA} from '@env';

export const fetchProducts = ({productsDispatch, label, category}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/userSession/services/getAll/${category}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject({message: JSON.parse(data).message, label});
      }
      resolve({
        data: JSON.parse(data),
        productsDispatch,
        label,
      });
    } catch (e) {
      reject({
        message: e.message,
        label,
      });
    }
  });
};
