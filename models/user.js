//mkae our constants
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');  //creeped in because I didn't think of it

//create our User model
class User extends Model {
    //set up method to run on instance data (per user) to check password
    checkPassword(userPassword) {
        return bcrypt.compareSync(userPassword, this.password);
    }
}

User.init(
    {
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        //there cannot be any duplicate email values in this table
        unique: true,
        //if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least six characters long
            len: [6],
        },
    },

    },
    {
        hooks: {
            //set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser
            },
            //set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser
            }
        },
        //pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        //don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        //don't pluralize name of database table
        freezeTableName: true,
        //do not use underscores instead of camel-casing (i.e. `commenttext` and not `comment_Text`)
        underscored: false,
        //make it so our model name stays lowercase in the database
        modelName: 'user',
    }
);

module.exports = User;