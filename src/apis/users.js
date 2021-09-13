import {API_HOSTA} from '@env';

export const fetchAllUsersApi = (page, currentUsers) => {
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

export const fetchNotificationCount = notificationDispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/getNotifications`,
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
      if (JSON.parse(data).notificationCount) {
        notificationDispatch({
          type: 'INIT',
          payload: {
            notificationCount: data.notificationCount,
            notifications: data.notifications,
          },
        });
      }
      resolve();
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};

export const resetNotificationsCount = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `http://${API_HOSTA}/api/userSession/resetNotificationsCount`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject(JSON.parse(data));
      }
      resolve();
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
