import {API_HOSTA} from '@env';
import axios from 'axios';

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
        `${API_HOSTA}/api/userSession/productCode/get/availableCodes/${currency}/${amount}/${order}/${serviceName}`,
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

export const addProductCategoryApi = ({
  category,
  body,
  categoryDispatch,
  serviceName,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/adminSession/${
          category === 'id'
            ? 'productID'
            : category === 'code'
            ? 'productCategory'
            : ''
        }/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject({message: JSON.parse(data).message});
      }
      resolve({
        data: JSON.parse(data),
        categoryDispatch,
        label:
          category === 'id'
            ? 'topupCategory'
            : category === 'code'
            ? 'codeCategory'
            : '',
        serviceName,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};

export const updateProductCategoryApi = ({
  category,
  body,
  categoryDispatch,
  serviceName,
  categoryState,
  id,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${API_HOSTA}/api/adminSession/${
          category === 'id'
            ? 'productID'
            : category === 'code'
            ? 'productCategory'
            : ''
        }/update/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );
      const data = await response.text();
      if (!JSON.parse(data).success) {
        reject({message: JSON.parse(data).message});
      }
      resolve({
        data: JSON.parse(data),
        categoryDispatch,
        label:
          category === 'id'
            ? 'topupCategory'
            : category === 'code'
            ? 'codeCategory'
            : '',
        serviceName,
        categoryState,
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};

export const addCodesApi = ({dataForm, categoryDispatch, serviceName}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${API_HOSTA}/api/adminSession/productCode/addMulti`,
        dataForm,
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
        categoryDispatch,
        serviceName,
        label: 'codeCategory',
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
