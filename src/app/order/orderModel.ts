// Model
import axios from 'axios';
import { IDataItem } from './orderController';

export const getOrders = () => {
  // Simulate fetching data from dummy JSON
  return axios.get('/api/auth').catch(err=>console.log(err));
};

export const insertOrder = (newOrder: IDataItem) => {
  // Simulate posting data to dummy API
  return axios.post('/api/auth', newOrder).catch(err=>console.log(err));
};

export const updateOrder = (orderId:number, updatedOrder: IDataItem) => {
  // Simulate updating data in dummy API
  return axios.put(`/api/auth/${orderId}`, updatedOrder).catch(err=>console.log(err));
};

export const deleteOrder = (orderId:number) => {
  // Simulate deleting data in dummy API
  return axios.delete(`/api/auth/${orderId}`).catch(err=>console.log(err));
};