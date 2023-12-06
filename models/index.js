const User = require('./user');
const Vehicles = require('./vehicles');
const Inventory = require('./inventory');

User.hasMany(Inventory, {
    foreignKey: 'userid',
    onDelete: 'CASCADE'
});

Inventory.belongsTo(User,{
    foreignKey: 'userid'
});

module.exports = { User, Vehicles, Inventory };