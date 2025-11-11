const router = require('express').Router();
const authController = require('../controllers/authController');
const ordersController = require('../controllers/ordersController');
const serverController = require('../controllers/serverController');
const deliveryController = require('../controllers/deliveryController');
const mongoUrl = 'mongodb://localhost:27017/TWB';
// Autenticação
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/changepwd', authController.changePassword);

// pedidos da hamburgueria "orders"
router.get('/orders', ordersController.getAllOrders);
router.post('/orders', ordersController.createOrder);
router.delete('/orders/:id', ordersController.deleteOrder);

// Buscar informação ao servidor
router.get('/serverinfo', serverController.getServerInfo);

// Serviço de entrega
router.get('/delivery', deliveryController.getAllDeliveryOrders);
router.put('/delivery/:id', deliveryController.updateDeliveryOrderStatus);

module.exports = router;
