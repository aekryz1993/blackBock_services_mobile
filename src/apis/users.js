import {API_HOSTA} from '@env';

export const fetchAllUsersApi = async (page, currentUsers) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/adminSession/users/getusers/${page}`,
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
        currentUsers,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
