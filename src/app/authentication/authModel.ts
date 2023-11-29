// Model
import axios from 'axios';
import { IDataItem } from './authController';

export const getAuthData = () => {
  // Simulate fetching data from dummy JSON
  return axios.get('/api/auth').catch(err=>console.log(err));
};

export const insertAuthData = (newAuthData: IDataItem) => {
  // Simulate posting data to dummy API
  return axios.post('/api/auth', newAuthData).catch(err=>console.log(err));
};

export const updateAuthData = (authId:number, updatedAuthData: IDataItem) => {
  // Simulate updating data in dummy API
  return axios.put(`/api/auth/${authId}`, updatedAuthData).catch(err=>console.log(err));
};

export const deleteAuthData = (authId:number) => {
  // Simulate deleting data in dummy API
  return axios.delete(`/api/auth/${authId}`).catch(err=>console.log(err));
};