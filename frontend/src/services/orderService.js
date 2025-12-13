import api from './api';

export const createOrder = (data) => api.post('/orders', data).then(res => res.data);
export const getOrderById = (id) => api.get(\`/orders/\${id}\`).then(res => res.data);
