import {API_HOSTA} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

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

export const sessionApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      const _session = JSON.parse(session);
      const response = await fetch(`${API_HOSTA}/api/userSession/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: _session.token}),
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

export const setupTokenApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_HOSTA}/api/userSession/token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      const setedToken = await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({token: JSON.parse(data).token}),
      );
      resolve({data: setedToken});
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
