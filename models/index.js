const User = require('./user');
const Vehicles = require('./vehicles');
const Inventory = require('./inventory');

User.hasMany(Inventory, {
    foreignKey: 'userid',
    onDelete: 'CASCADE'
});

module.exports = { User, Vehicles, Inventory };