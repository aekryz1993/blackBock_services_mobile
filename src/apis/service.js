import {API_HOSTA} from '@env';

export const fetchTopUpServices = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/services/getAll/id`,
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

export const fetchCodeServices = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/services/getAll/code`,
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
