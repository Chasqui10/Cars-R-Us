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
    const inventory = await Inventory.findAll({
      where: whereClause,
    });

    res.json({ inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const inventoryData = await Inventory.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with this id!' });
      return;
    }

    res.status(200).json(inventoryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const inventoryData = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with this id!' });
      return;
    }

    res.status(200).json(inventoryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

router.post('/', async (req, res) => {
  try {
     // Extract data from the request body
     const { make, model, year, category, vin, mileage, price, description, transmission, engine, driveTrain, fuelType, doors, cylinders, mpgCity, mpgHighway, interiorColor, exteriorColor } = req.body;
     console.log(req.body);
    //  if(!make || !model || !year || !category || !vin || !mileage || !price || !description || !transmission || !engine || !driveTrain || !fuelType || !doors || !cylinders || !mpgCity || !mpgHighway || !interiorColor || !exteriorColor) 
    //  {
    //     return res.status(400).json({ error: 'REQUIRED FIELDS MISSING: Make, model, year, category, id, vin, mileage, price, description, transmission, engine, driveTrain, fuelType, doors, cylinders, mpgCity, mpgHighway, interiorColor, exteriorColor are all required' });
    //  }
      const inventory = await Inventory.create({
      make,
      model,
      year,
      category,
      vin,
      mileage,
      price,
      description,
      transmission,
      engine,
      driveTrain,
      fuelType,
      doors,
      cylinders,
      mpgCity,
      mpgHighway,
      interiorColor,
      exteriorColor,
      });
    res.status(201).json({ inventory: inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;

//Example JSOn post request
// {
// 	"make": "Billymake",
// 	"model": "Billymodel",
// 		"year": "1980",
// 		"category": "oldpersonsmobile",
// 		"vin": "12345",
// 		"mileage": "10",
// 		"price": "1000000",
// 		"description": "Really old car",
// 		"transmission": "barely",
// 		"engine": "yes",
// 		"driveTrain": "left-wheel drive",
// 		"fuelType": "beans",
// 		"doors": "1",
// 		"cylinders": "7",
// 		"mpgCity": "6",
// 		"mpgHighway": "120" ,
// 		"interiorColor": "dirty",
// 		"exteriorColor": "dinosaur wrap"
// }
