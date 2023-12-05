// This is a file that is meant to change as more of the client side of the web application is shown through the MVC/ static page
// My thoughts on what interactive routes would be needed for our webapplication based of our goal
// This would handle posting a new car onto the data base for the web application 
const router = require('express').Router();
const Vehicle = require('../../models/vehicles');
const { Op } = require('sequelize'); // Import necessary Sequelize components




router.get('/', async (req, res) => {
  try {
    const { make, model, year } = req.query;

    // Construct the where clause dynamically based on the presence of parameters
    const whereClause = {
      [Op.and]: [],
    };

    if (make) {
      whereClause[Op.and].push({ make: make });
    }

    if (model) {
      whereClause[Op.and].push({ model: model });
    }

    if (year) {
      whereClause[Op.and].push({ year: year });
    }

    // Use the where clause in your Sequelize query
    const vehicles = await Vehicle.findAll({
      where: whereClause,
    });

    res.json({ vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;