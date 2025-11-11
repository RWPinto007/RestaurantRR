const db = require('./db');
const mongoUrl = 'mongodb://localhost:27017/TWB';
const Menu = {
    getAll: function (callback) {
        return db.query('SELECT * FROM menu', callback);
    },
    create: function (menu, callback) {
        return db.query('INSERT INTO menu SET ?', menu, callback);
    },
    update: function (id, menu, callback) {
        return db.query('UPDATE menu SET name=?,description=?,price=? WHERE id=?', [menu.name, menu.description, menu.price, id], callback);
    },
    remove: function (id, callback) {
        return db.query('DELETE FROM menu WHERE id=?', [id], callback);
    }
};

module.exports = Menu;
