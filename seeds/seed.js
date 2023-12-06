//import sequielize connection and models
const sequelize = require('../config/connection');
const { User, Vehicles, Inventory } = require('../models'); 

//create constants from model data
const users = require('./seeduserdata.json');
const vehicles = require('./seedvehicles.json');
const inventory = require('./seedinventory.json');


//seeds the database via function
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //creates the user data from the seeduserdata.json file
  await User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
  });
  
    //creates the item data from the seeditemdata.json file
  await Vehicles.bulkCreate(vehicles, {
    individualHooks: true,
    returning: true,
  });

  await Inventory.bulkCreate(inventory, {
    individualHooks: true,
    returning: true,
  });

  //exits the process once the seeding is complete
  process.exit(0);
};

  
//runs the seedDatabase function
seedDatabase();
