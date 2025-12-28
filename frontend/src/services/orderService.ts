import api from './api';

export const createOrder = (data: any) => api.post('/orders', data).then(res => res.data);
export const getOrderById = (id: string) => api.get(`/orders/${id}`).then(res => res.data);