const Menu = require('./menu');
const mongoUrl = 'mongodb://localhost:27017/TWB';
const menuController = {
    getAll: function (req, res) {
        Menu.getAll(function (err, rows) {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.json(rows);
            }
        });
    },
    create: function (req, res) {
        const menu = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        };
        Menu.create(menu, function (err, result) {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.json({ message: "Menu item added successfully" });
            }
        });
    },
    update: function (req, res) {
        const id = req.params.id;
        const menu = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        };
        Menu.update(id, menu, function (err, result) {
            if (err) {
                res.status(500).json({ error: err });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: "Menu item not found" });
            } else {
                res.json({ message: "Menu item updated successfully" });
            }
        });
    },
    remove: function (req, res) {
        const id = req.params.id;
        Menu.remove(id, function (err, result) {
            if (err) {
                res.status(500).json({ error: err });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: "Menu item not found" });
            } else {
                res.json({ message: "Menu item deleted successfully" });
            }
        });
    }
};

module.exports = menuController;
