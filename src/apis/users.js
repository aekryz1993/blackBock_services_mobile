import {API_HOSTA} from '@env';

export const fetchAllUsersApi = (page, currentUsers) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/adminSession/users/getusers/${page}`,
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

export const addUserApi = ({body}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_HOSTA}/api/adminSession/users/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject(JSON.parse(data));
      }
      resolve(JSON.parse(data));
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
        `${API_HOSTA}/api/userSession/getNotifications`,
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
      // if (JSON.parse(data).notificationCount !== 0) {
      notificationDispatch({
        type: 'INIT',
        payload: {
          notificationCount: JSON.parse(data).notificationCount,
          notifications: JSON.parse(data).notifications,
        },
      });
      // }
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
        `${API_HOSTA}/api/userSession/resetNotificationsCount`,
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
      resolve(JSON.parse(data).success);
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
