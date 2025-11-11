const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/TWB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Failed to connect to MongoDB');
    console.error(error);
});
/* const MenuItemSchema = new mongoose.Schema({// Define o menu  schema
    name: String,
    description: String,
    price: Number,
});
const OrderSchema = new mongoose.Schema({// Define o pedido schema
    items: [MenuItemSchema],
    total: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);// Define the models
const Order = mongoose.model('Order', OrderSchema);
app.get('/menu', async (req, res) => {// Define as routes
    const menu = await MenuItem.find();
    res.json(menu);
});
app.post('/order', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
});*/
const port = 3002;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




