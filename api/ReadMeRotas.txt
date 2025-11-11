get          /users
post     /register


post '/authenticate'


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

app.get('/menu', async (req, res) => {// Define as routes
    const menu = await MenuItem.find();
    res.json(menu);
});
app.post('/order', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
});