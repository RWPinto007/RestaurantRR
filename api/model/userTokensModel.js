const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/TWB';
const model = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    expiring: {
        type: String,
        required: true
    },
}, { collection: 'userTokens' });

module.exports = new mongoose.model("UserToken", model)