import {API_HOSTA} from '@env';
import axios from 'axios';

export const fetchProductsApi = ({productsDispatch, label, category}) => {
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

export const addServiceApi = ({dataForm, productsDispatch, category, name}) => {
  return new Promise(async (resolve, reject) => {
    try {
      dataForm.append('category', category);
      dataForm.append('label', name);
      const response = await axios.post(
        `${API_HOSTA}/api/adminSession/services/add`,
        dataForm,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const data = await response.data;
      if (!data.success) {
        reject({message: data.message});
      }
      resolve({
        data: data,
        productsDispatch,
        label:
          category === 'id'
            ? 'topupProducts'
            : category === 'code'
            ? 'codeProducts'
            : '',
      });
    } catch (e) {
      reject({
        message: e.message,
      });
    }
  });
};
