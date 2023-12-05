const router = require('express').Router();
const { Inventory } = require('../../models');




router.get('/', async (req, res) => {
  try {
    const { make, model, year, category, id, vin, mileage, price, description, transmission, engine,
       driveTrain, fuelType, doors, cylinders, mpgCity, mpgHighway, interiorColor, exteriorColor} = req.query;

    // Construct the where clause dynamically based on the presence of parameters
    const whereClause = {};
    if (make) {whereClause.make = make;}
    if (model) {whereClause.model = model;}
    if (year) {whereClause.year = year;}
    if (category) {whereClause.category = category;}
    if (id) {whereClause.id = id;}
    if (vin) {whereClause.vin = vin;}
    if (mileage) {whereClause.mileage = mileage;}
    if (price) {whereClause.price = price;}
    if (description) {whereClause.description = description;}
    if (transmission) {whereClause.transmission = transmission;}
    if (engine) {whereClause.engine = engine;}
    if (driveTrain) {whereClause.driveTrain = driveTrain;}
    if (fuelType) {whereClause.fuelType = fuelType;}
    if (doors) {whereClause.doors = doors;}
    if (cylinders) {whereClause.cylinders = cylinders;}
    if (mpgCity) {whereClause.mpgCity = mpgCity;}
    if (mpgHighway) {whereClause.mpgHighway = mpgHighway;}
    if (interiorColor) {whereClause.interiorColor = interiorColor;}
    if (exteriorColor) {whereClause.exteriorColor = exteriorColor;}

    // Use the where clause in your Sequelize query
    const vehicles = await Inventory.findAll({
      where: whereClause,
    });

    res.json({ vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;