import axios from 'axios';

const API = axios.create({
  baseURL: 'https://shopping-list-backend-d8go.onrender.com/api', // backend URL
});

export const getItems = () => API.get('/items');
export const addItem = (item) => API.post('/items', item);
export const updateItem = (id, item) => API.put(`/items/${id}`, item);
export const deleteItem = (id) => API.delete(`/items/${id}`);
