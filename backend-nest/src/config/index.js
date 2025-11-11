const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/TWB', {}, (error) => {
    if (error) {
        console.log('Falha ao autenticar com mongoDB');
        console.log(error);
        return;
    }

    console.log('Conexão com mongoDB estabelecida');

})

mongoose.Promise = global.Promise;

module.exports = mongoose;

