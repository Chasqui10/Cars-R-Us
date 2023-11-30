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
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
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
    vin: {
        type: DataTypes.STRING,
        allowNull: true,
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