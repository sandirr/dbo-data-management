// Model
import axios from 'axios';
import { IDataItem } from './supplierController';

export const getSuppliers = () => {
  // Simulate fetching data from dummy JSON
  return axios.get('/api/auth').catch(err=>console.log(err));
};

export const insertSupplier = (newSupplier: IDataItem) => {
  // Simulate posting data to dummy API
  return axios.post('/api/auth', newSupplier).catch(err=>console.log(err));
};

export const updateSupplier = (supplierId:number, updatedSupplier: IDataItem) => {
  // Simulate updating data in dummy API
  return axios.put(`/api/auth/${supplierId}`, updatedSupplier).catch(err=>console.log(err));
};

export const deleteSupplier = (supplierId:number) => {
  // Simulate deleting data in dummy API
  return axios.delete(`/api/auth/${supplierId}`).catch(err=>console.log(err));
};