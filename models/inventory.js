//mkae our constants
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {
}

Inventory.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mileage: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    transmission: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    engine: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    driveTrain: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fuelType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    doors: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cylinders: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    mpgCity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    mpgHighway: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    interiorColor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    exteriorColor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'userid',
        },
    },


},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'inventory',
    }
);

module.exports = Inventory;