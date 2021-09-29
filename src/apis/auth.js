import {API_HOSTA} from '@env';

export const loginApi = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_HOSTA}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      let data = await response.text();
      if (!JSON.parse(data).auth) {
        reject(JSON.parse(data));
      }
      resolve(JSON.parse(data));
    } catch (e) {
      reject({
        message: e.message,
        auth: false,
      });
    }
  });
};

export const logoutApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_HOSTA}/api/userSession/logout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      resolve(JSON.parse(data));
    } catch (e) {
      reject({
        message: e.message,
        auth: false,
      });
    }
  });
};
