const router = require('express').Router();
const inventoryRoutes = require("./inventoryRoutes"),userRoutes=require("./userRoutes"),vehicleRoutes=require("./vehicleRoutes");

router
    .use('/inventory', inventoryRoutes)
    .use('/vehicle', vehicleRoutes)
    .use('/user', userRoutes);



module.exports = router;

