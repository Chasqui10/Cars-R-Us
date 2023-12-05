const router = require('express').Router();
//const carRoutes = require('./vehicleRoutes');
//const partsRoutes = require('./partsRoutes');
//const messageRoutes = require('./MessageRoutes');
const userRoutes = require('./userRoutes');

//router.use('/car', carRoutes);
//router.use('/parts', partsRoutes);
//router.use('/message', messageRoutes);
router.use('/user', userRoutes);

module.exports = router;

