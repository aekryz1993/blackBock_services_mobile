import {API_HOSTA} from '@env';
import axios from 'axios';

export const fetchCommands = ({page, isTreated, isAdmin}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const api = isAdmin
        ? `${API_HOSTA}/api/adminSession/productCode/getCommands/${page}/${isTreated}`
        : `${API_HOSTA}/api/userSession/productCode/get/commands/${page}/${isTreated}`;

      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject(JSON.parse(data));
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

export const sendCommands = ({userId, commandId, categoryId, excel}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${API_HOSTA}/api/adminSession/productCode/sendCommand/${userId}/${commandId}/${categoryId}`,
        excel,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const data = await response.data;
      if (!data.success) {
        reject(data);
      }
      resolve({
        data: data,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
