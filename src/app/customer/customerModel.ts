// Model
import axios from 'axios';
import { IDataItem } from './customerController';

export const getCustomers = () => {
  // Simulate fetching data from dummy JSON
  return axios.get('/api/auth').catch(err=>console.log(err));
};

export const insertCustomer = (newCustomer: IDataItem) => {
  // Simulate posting data to dummy API
  return axios.post('/api/auth', newCustomer).catch(err=>console.log(err));
};

export const updateCustomer = (customerId:number, updatedCustomer: IDataItem) => {
  // Simulate updating data in dummy API
  return axios.put(`/api/auth/${customerId}`, updatedCustomer).catch(err=>console.log(err));
};

export const deleteCustomer = (customerId:number) => {
  // Simulate deleting data in dummy API
  return axios.delete(`/api/auth/${customerId}`).catch(err=>console.log(err));
};