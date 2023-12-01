const router = require('express').Router();
const carRoutes = require('./vehicleRoutes');
const partsRoutes = require('./partsRoutes');
const messageRoutes = require('./MessageRoutes');


router.use('/car', carRoutes);
router.use('/parts', partsRoutes);
router.use('/message', messageRoutes);

module.exports = router;

